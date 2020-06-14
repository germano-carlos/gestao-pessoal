$(document).ready(() => {
    /**
     * Carrega a dinâmica de listar as Tarefas do Local Storage
     */
    
    db.customerdata = JSON.parse(localStorage.getItem("users"));

    let htmlTask = '';
    var object = JSON.parse(localStorage.getItem("tasks"));
    var dependentes = localStorage.getItem("dependentes").split(',')

    for(i = 0;i < db.customerdata.length ;i++)
    {
        if(db.customerdata[i].id == localStorage.getItem("id"))
        {
            for(k = 0;k < db.customerdata.length ;k++)
            {
                for(j = 0;j < dependentes.length ;j++)
                {
                    if(db.customerdata[k].id == dependentes[j])
                    {
                        htmlTask += montaHTML(dependentes[j]);
                    }
                }
            }
        }
    }

    $('.list-task').html(htmlTask)

    function montaHTML(dependent_id)
    {
        var dependent = JSON.parse(getData(dependent_id));

        return htmlTask = `<tr class="task-item">' 
                        <td data-id="${ dependent.id }" style="width: 60px;">
                            <img src="assets/images/users/user-2.jpg" alt="" class="thumb-sm rounded-circle">
                        </td>
                        <td data-nome="${dependent.nome}" > ${dependent.nome}
                           <p class="m-0 text-muted">On 02 Jun, 2019</p>
                        </td>
                        <td data-responsavel="2">
                            ${dependent.tarefas}
                        </td>
                        <td>
                            ${dependent.sexo}
                        </td>
                        <td data-prioridade="1">
                            ${dependent.email}
                        </td>
                        <td>
                            <input checked class="checkdep" name="switch${db.customerdata[i].id}" type="checkbox" id="switch${db.customerdata[i].id}" switch="bool"/>
                            <label for="switch${db.customerdata[i].id}" data-on-label="Yes" data-off-label="No"></label>
                        </td>
                    </tr>`
    }

    function getData(dependent_id)
    {
        for(i=0;i<db.customerdata.length;i++)
        {
            var count = 0;

            if(db.customerdata[i].id == dependent_id)
            {
                var tasks = JSON.parse(localStorage.getItem("tasks"));
                for(j=0; j < tasks.length; j++)
                {
                    if(tasks[j].responsavel_id == dependent_id)
                    {
                        count++;
                    }
                }

                var json = JSON.stringify({
                    id: db.customerdata[i].id,
                    nome: db.customerdata[i].nome,
                    sexo: db.customerdata[i].sexo == 'M' ? 'Masculino' : 'Feminino',
                    email: db.customerdata[i].email,
                    status: db.customerdata[i].status,
                    tarefas: count
                });

                break;
            }
        }

        return json;
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
            if(diff < 1)
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
            else if(done)
            {   
                return JSON.stringify({
                    event: 'Concluído',
                    tag : 'text-success mr-1'
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
            if(diff < 2)
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
            else if(done)
            {   return JSON.stringify({
                    event: 'Concluido',
                    tag : 'text-success mr-1'
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
            if(diff < 4)
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
            else if(done)
            {   return JSON.stringify({
                    event: 'Concluido',
                    tag : 'text-success mr-1'
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
            if(diff < 3)
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
            else if(done)
            {   return JSON.stringify({
                    event: 'Concluido',
                    tag : 'text-success mr-1'
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
            if(diff < 6)
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
            else if(done)
            {   return JSON.stringify({
                    event: 'Concluido',
                    tag : 'text-success mr-1'
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
        var taskId      = $(this).closest('tr').find('td[data-id]').data('id');
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
                        object[i].status = 'Concluido';
                        localStorage.setItem("tasks", JSON.stringify(object));
                        alert('Parabens, você concluiu uma tarefa com sucesso');
                        document.location.reload();
                    }
                }
            }
        })
    })
});