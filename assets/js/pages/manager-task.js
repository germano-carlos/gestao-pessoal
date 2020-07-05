
    var arrayElementsDependentes = [];
    var arrayElementsAtrasado = [];
    var arrayElementsCuidado = [];
    var arrayElementsAindaTemTempo = [];
    var arrayElementsConcluido = [];

    var info = []; 

    var countAtrasado = 0;
    var countCuidado = 0;
    var countAindaTemTempo = 0;
    var countConcluido = 0;

$(document).ready(() => {
    /**
     * Carrega a dinâmica de listar as Tarefas do Local Storage
     */
    
    db.customerdata = JSON.parse(localStorage.getItem("users"));

    let htmlTask = '';
    var object = JSON.parse(localStorage.getItem("tasks"));
    var tasksNotComplete = 0;
    var tasksComplete = 0;

    for(i = 0;i < object.length;i++)
    {
        var settings = JSON.parse(getSettings(object[i].prioridade_id));
        var dataInicio = new Date();
        var dataFim = new Date(object[i].data_limite);
    
        var diffMilissegundos = dataFim - dataInicio;
        var diffSegundos = diffMilissegundos / 1000;
        var diffMinutos = diffSegundos / 60;
        var diffHoras = diffMinutos / 60;

        var done = object[i].status == 'Concluído';
        var timeSettings = JSON.parse(deparaTempo(diffHoras, object[i].prioridade_id, done));
        var text_icon = timeSettings.tag;
        var text = timeSettings.event;

        var responsavelName = localStorage.getItem("nome");
        var responsavelId = localStorage.getItem("id");
        var status = object[i].status == 'Concluído' ? 'checked'  : '';
        tasksNotComplete = !done ? tasksNotComplete + 1  : tasksNotComplete;
        tasksComplete = done ? tasksComplete + 1  : tasksComplete;
        countConcluido = tasksComplete;
        countAtrasado = text == 'Atrasado' ? countAtrasado + 1  : countAtrasado;
        countCuidado = text == 'Cuidado' ? countCuidado + 1  : countCuidado;
        countAindaTemTempo = text == 'Ainda tem tempo' ? countAindaTemTempo + 1  : countAindaTemTempo;

        for(j=0;j<db.customerdata.length;j++)
        {
            if(db.customerdata[j].id == object[i].responsavel_id)
            {
                responsavelName = db.customerdata[j].nome;
                responsavelId = db.customerdata[j].id;
            }
        }

        //Localiza se ja foi inserido este dependente
        var localizado = false;
        arrayElementsDependentes.forEach(function(element)
        {
            if(element == responsavelName)
                localizado = true;
        });

        //Cria ele caso não exista
        if(!localizado)
        { 
            arrayElementsDependentes.push(responsavelName);
            var stringfyCounts = JSON.stringify({
                nome: responsavelName,
                countW:0,
                countA:0,
                countC:0,
                countT:0
            });

            info.push(JSON.parse(stringfyCounts));
        }

        //Percorre o array criado, atualizando as informações baseado na tarefa atual do FOR
        for(la=0;la<info.length;la++)
        {
            if(info[la].nome == responsavelName)
            {
                updateState(info[la], text);
            }

            arrayElementsAtrasado[la] = info[la].countA;
            arrayElementsAindaTemTempo[la] = info[la].countT;
            arrayElementsConcluido[la] = info[la].countC;
            arrayElementsCuidado[la] = info[la].countW;
        }
        
        htmlTask += `<tr class="task-item">' 
                        <td data-id="${object[i].id}" style="width: 60px;">
                            <img src="assets/images/users/user-2.jpg" alt="" class="thumb-sm rounded-circle">
                        </td>
                        <td data-nome="${object[i].nome}" > ${ localStorage.getItem("nome") }
                           <p class="m-0 text-muted">On 02 Jun, 2019</p>
                        </td>
                        <td data-responsavel="${responsavelId}">
                            ${ responsavelName }</td>
                        <td>
                            ${ object[i].nome } 
                        </td>
                        <td data-prioridade="${ object[i].prioridade_id }">
                            <i class="mdi mdi-checkbox-blank-circle ${text_icon}"></i> ${text}
                        </td>
                        <td>
                            ${ settings.Nome }
                            <p class="m-0 text-muted ">Uma tarefa com essa dificuldade pode ser conclúida em até ${ settings.tempo } horas</p>
                        </td>
                        <td data-limite="${object[i].data_limite}">
                            ${ object[i].data_limite == null ? 'Não Especificado' : object[i].data_limite }
                        </td>
                        <td>
                            <input ${status} class="checktask" name="switch${object[i].id}" type="checkbox" id="switch${object[i].id}" switch="bool"/>
                            <label for="switch${object[i].id}" data-on-label="Yes" data-off-label="No"></label>
                        </td>
                        <td>
                            <div>
                                <a class="btn btn-primary btn-sm" data-toggle="modal" data-target=".bs-example-modal-xl">Edit</a>
                            </div>
                        </td>
                    </tr>`
    }

    /**
     * Atualizo as informações da home page
     */
    $('.list-task').html(htmlTask)
    localStorage.setItem("tasksNotComplete", tasksNotComplete);
    localStorage.setItem("tasksComplete", tasksComplete);

    $('#notComplete').html(tasksNotComplete);
    $('#complete').html(tasksComplete);

    //Faz o calculo da porcentagem
    var totalTask = tasksNotComplete + tasksComplete;
    var valuePerTask = 1 / totalTask;
    var valueTaskNot = (valuePerTask * tasksNotComplete)*100;
    var valueTaskCompl = (valuePerTask * tasksComplete)*100;

    //Insere na HomePage
    $('#complete-percentage').html(valueTaskCompl + '%');
    $('#notcomplete-percentage').html(valueTaskNot + '%');

    /**
     * 
     * @param {JSON} jsonInfo 
     * @param {String} text
     * Atualiza as informaçoes do JSON em questão 
     */
    function updateState(jsonInfo, text){
    
        switch(text)
        {
            case 'Atrasado':
                let countA = jsonInfo.countA;
                jsonInfo.countA = countA + 1;
            break;
            case 'Cuidado':
                let countW = jsonInfo.countW;
                jsonInfo.countW = countW + 1;
            break;
            case 'Concluído':
                let countC = jsonInfo.countC;
                jsonInfo.countC = countC + 1;
            break;
            case 'Ainda tem tempo':
                let countT = jsonInfo.countT;
                jsonInfo.countT = countT + 1;
            break;
            default:
                alert('Não possui nenhum texto parametrizado');
            break;
       }
    }

    /**
     * 
     * @param {*int} dificuldade 
     * Busca as configurações baseando na dificuldade da tarefa
     */
    function getSettings(dificuldade)
    {
        if(dificuldade == 1)
        {
            return JSON.stringify({
                            id   : 1,
                            Nome : "Muito Alta",
                            tempo : 2,
                            });
        }
        if(dificuldade == 2)
        {
            return JSON.stringify({
                            id   : 2,
                            Nome : "Alta",
                            tempo : 4,
                            });
        }
        if(dificuldade == 3)
        {
            return JSON.stringify({
                            id   : 3,
                            Nome : "Média",
                            tempo : 8,
                            });
        }
        if(dificuldade == 4)
        {
            return JSON.stringify({
                            id   : 4,
                            Nome : "Baixa",
                            tempo : 12,
                            });
        }
        if(dificuldade == 5)
        {
            return JSON.stringify({
                            id   : 5,
                            Nome : "Muito Baixa",
                            tempo : 24,
                            });
        }
    }

    /**
     * 
     * @param {Date} diff 
     * @param {int} prioridade 
     * @param {boolean} done 
     * 
     * Valida qual o tipo de texto será apresentado
     */
    function deparaTempo(diff, prioridade, done)
    {
        if(prioridade == 1)
        {
            if(done)
            {   
                return JSON.stringify({
                    event: 'Concluído',
                    tag : 'text-success mr-1'
                    });
            }
            else if(diff < 1)
            {
                return JSON.stringify({
                        event: 'Atrasado',
                        tag : 'text-danger mr-1',
                        });
            }
            else if(diff < 2)
            {   
                return JSON.stringify({
                        event: 'Cuidado',
                        tag : 'text-warning mr-1'
                        });
            }
            else{
                return JSON.stringify({
                    event: 'Ainda tem tempo',
                    tag : 'text-info mr-1'
                    });
            }
        }
        if(prioridade == 2)
        {
            
            if(done)
            {   return JSON.stringify({
                    event: 'Concluído',
                    tag : 'text-success mr-1'
                    });
            }
            else if(diff < 2)
            {
                return JSON.stringify({
                        event: 'Atrasado',
                        tag : 'text-danger mr-1',
                        });
            }
            else if(diff < 4)
            {   return JSON.stringify({
                        event: 'Cuidado',
                        tag : 'text-warning mr-1'
                        });
            }
            else{
                return JSON.stringify({
                    event: 'Ainda tem tempo',
                    tag : 'text-info mr-1'
                    });
            }
        }
        if(prioridade == 3)
        {
            if(done)
            {   return JSON.stringify({
                    event: 'Concluído',
                    tag : 'text-success mr-1'
                    });
            }
            else if(diff < 4)
            {
                return JSON.stringify({
                        event: 'Atrasado',
                        tag : 'text-danger mr-1',
                        });
            }
            else if(diff < 8)
            {   return JSON.stringify({
                        event: 'Cuidado',
                        tag : 'text-warning mr-1'
                        });
            }
            else{
                return JSON.stringify({
                    event: 'Ainda tem tempo',
                    tag : 'text-info mr-1'
                    });
            }
        }
        if(prioridade == 4)
        {
            if(done)
            {   return JSON.stringify({
                    event: 'Concluído',
                    tag : 'text-success mr-1'
                    });
            }
            else if(diff < 3)
            {
                return JSON.stringify({
                        event: 'Atrasado',
                        tag : 'text-danger mr-1',
                        });
            }
            else if(diff < 6)
            {   return JSON.stringify({
                        event: 'Cuidado',
                        tag : 'text-warning mr-1'
                        });
            }
            else{
                return JSON.stringify({
                    event: 'Ainda tem tempo',
                    tag : 'text-info mr-1'
                    });
            }
        }
        if(prioridade == 5)
        {
            
            if(done)
            {   return JSON.stringify({
                    event: 'Concluído',
                    tag : 'text-success mr-1'
                    });
            }
            else if(diff < 6)
            {
                return JSON.stringify({
                        event: 'Atrasado',
                        tag : 'text-danger mr-1',
                        });
            }
            else if(diff < 12)
            {   return JSON.stringify({
                        event: 'Cuidado',
                        tag : 'text-warning mr-1'
                        });
            }
            else{
                return JSON.stringify({
                    event: 'Ainda tem tempo',
                    tag : 'text-info mr-1'
                    });
            }
        }
    }

    /**
     * Carrega a dinâmica de dependentes MODAL
     */


    let dependentes = localStorage.getItem("dependentes").split(',')
    let optionString = `<option value= ${ localStorage.getItem("id") }> ${ localStorage.getItem("nome") } </option> `;

    for(i = 0; i < db.customerdata.length; i++)
    {
        for (j = 0; j < dependentes.length; j++)
        {
            if(db.customerdata[i].id == dependentes[j])
            {
                optionString += `<option value= ${ db.customerdata[i].id }> ${ db.customerdata[i].nome } </option>`;
            }
        }
    }

    $('.resp').append(optionString)

    /**
     *  Validação do click do modal para começar a edição da tarefa
     */

    
    $(document).on("click", ".btn-sm", function(){
        var nomeTarefa  = $(this).closest('tr').find('td[data-nome]').data('nome');
        var prioridade  = $(this).closest('tr').find('td[data-prioridade]').data('prioridade');
        var dataLimite  = $(this).closest('tr').find('td[data-limite]').data('limite');
        var responsavel = $(this).closest('tr').find('td[data-responsavel]').data('responsavel');
        var taskId      = $(this).closest('tr').find('td[data-id]').data('id');

        
        $('input[name=taskName]').val(nomeTarefa);
        $('input[name=date]').val(dataLimite);
        $('input[name=idTask]').val(taskId);

        $.each($('#priorityName option'),(index, element) => {
            if($(element).val() == prioridade)
            {
                $(element).attr('selected', true)
            }
        })

        $.each($('.resp option'),(index, element) => {
            if($(element).val() == responsavel)
            {
                $(element).attr('selected', true)
            }
        })
        
    });

    $('.edit').click(() => {
        
        var taskId = $('input[name=idTask]').val();
        var taskName = $('input[name=taskName]').val();
        var responsavelId = $(".resp option:selected").val();
        var priorityId = $("#priorityName option:selected").val();
        var date = $('input[name=date]').val();
        
        for(i=0;i<object.length;i++)
        {
            if(object[i].id == taskId)
            {
                object[i].nome = taskName;
                object[i].responsavel_id = responsavelId;
                object[i].prioridade_id = priorityId;
                var data = new Date();

                if(typeof date == 'undefined' || date == '')
                    date = dateCalculator(priorityId, data);
                
                object[i].data_limite = date;
                
                localStorage.setItem("tasks", JSON.stringify(object));

                alert('Status Alterado com sucesso');
                document.location.reload();
            }
        }
    })

    $('.remove').click(() => {
        var taskId = $('input[name=idTask]').val();
        removerPela('id', taskId);

        localStorage.setItem("tasks", JSON.stringify(object));
        alert('Tarefa Removida com Sucesso');
        document.location.reload();
    })

    function removerPela(chave, valor){
        object = object.filter(function(jsonObject) {
            return jsonObject[chave] != valor;
        });
    }

    function dateCalculator(priorityId, date)
    {
        if(priorityId == 1)
        {
            var hora = date.getHours();
            var newDate = new Date();
            var teste = hora + 2;
            newDate.setHours(hora + 2);
            newDate.setMinutes(0);
            return newDate;
        }
        if(priorityId == 2)
        {
            var hora = date.getHours();
            var newDate = new Date();
            var teste = hora + 2;
            newDate.setHours(teste);
            newDate.setMinutes(0);
            return newDate;
        }
        if(priorityId == 3)
        {
            var hora = date.getHours();
            var newDate = new Date();
            newDate.setHours(hora + 8);
            newDate.setMinutes(0);
            return newDate;
        }
        if(priorityId == 4)
        {
            var hora = date.getHours();
            var newDate = new Date();
            newDate.setHours(hora + 12);
            newDate.setMinutes(0);
            return newDate;
        }
        if(priorityId == 5)
        {
            var hora = date.getHours();
            var newDate = new Date();
            newDate.setHours(hora + 24);
            newDate.setMinutes(0);
            return newDate;
        }
    }

    $(document).on("click", ".checktask", function(){
        var taskId = $(this).closest('tr').find('td[data-id]').data('id');
        var name = 'switch'+taskId;

        $('#'+name).change(() => {

            if(!this.checked)
            {
                for(i=0;i<object.length;i++)
                {
                    if(taskId == object[i].id)
                    {
                        object[i].status = 'Não Finalizado';
                        localStorage.setItem("tasks", JSON.stringify(object));
                        document.location.reload();
                    }
                }
            }
            else
            {
                for(i=0;i<object.length;i++)
                {
                    if(taskId == object[i].id)
                    {
                        object[i].status = 'Concluído';
                        localStorage.setItem("tasks", JSON.stringify(object));
                        alert('Parabens, você concluiu uma tarefa com sucesso');
                        document.location.reload();
                    }
                }
            }
        })
    })
});