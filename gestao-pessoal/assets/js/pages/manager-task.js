$(document).ready(() => {
    /**
     * Carrega a dinâmica de dependentes MODAL
     */

    var persona;
    let contador = 0;
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
     * Carrega a dinâmica de listar as Tarefas do Local Storage
     */

    let htmlTask = '';
    var object = JSON.parse(localStorage.getItem("tasks"));

    for(i = 0;i< object.length;i++)
    {
        var settings = JSON.parse(getSettings(object[i].prioridade_id));
        var dataInicio = new Date();
        var dataFim = new Date(object[i].data_limite);
    
        var diffMilissegundos = dataFim - dataInicio;
        var diffSegundos = diffMilissegundos / 1000;
        var diffMinutos = diffSegundos / 60;
        var diffHoras = diffMinutos / 60;

        var text_icon = deparaTempo(diffHoras, object[i].prioridade_id, false);

        htmlTask += `<tr>' 
                        <td style="width: 60px;">
                            <img src="assets/images/users/user-2.jpg" alt="" class="thumb-sm rounded-circle">
                        </td>
                        <td> ${ localStorage.getItem("nome") }
                           <p class="m-0 text-muted">On 02 Jun, 2019</p>
                        </td>
                        <td>Marcelo Teixeira</td>
                        <td>
                            ${ object[i].nome } 
                        </td>
                        <td>
                            <i class="mdi mdi-checkbox-blank-circle ${text_icon}"></i> Atrasado
                        </td>
                        <td>
                            ${ settings.Nome }
                            <p class="m-0 text-muted ">Uma tarefa com essa dificuldade pode ser conclúida em até ${ settings.tempo } horas</p>
                        </td>
                        <td>
                            ${ object[i].data_limite == null ? 'Não Especificado' : object[i].data_limite }
                        </td>
                        <td>
                            <div>
                                <a href="#" class="btn btn-primary btn-sm" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-xl">Edit</a>
                            </div>
                        </td>
                    </tr>`
    }

    $('.list-task').html(htmlTask)


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

    function deparaTempo(diff, prioridade, done)
    {
        if(prioridade == 1)
        {
            if(diff < 1)
            {
                return 'text-danger mr-1';
            }
            else if(diff < 2)
            {
                return 'text-warning mr-1';
            }
            else if(done)
            {
                return 'text-success mr-1';
            }
        }
        if(prioridade == 2)
        {
            if(diff < 2)
            {
                return 'text-danger mr-1';
            }
            else if(diff < 4)
            {
                return 'text-warning mr-1';
            }
            else if(done)
            {
                return 'text-success mr-1';
            }
        }
        if(prioridade == 3)
        {
            if(diff < 4)
            {
                return 'text-danger mr-1';
            }
            else if(diff < 8)
            {
                return 'text-warning mr-1';
            }
            else if(done)
            {
                return 'text-success mr-1';
            }
        }
        if(prioridade == 4)
        {
            if(diff < 3)
            {
                return 'text-danger mr-1';
            }
            else if(diff < 6)
            {
                return 'text-warning mr-1';
            }
            else if(done)
            {
                return 'text-success mr-1';
            }
        }
        if(prioridade == 5)
        {
            if(diff < 6)
            {
                return 'text-danger mr-1';
            }
            else if(diff < 12)
            {
                return 'text-warning mr-1';
            }
            else if(done)
            {
                return 'text-success mr-1';
            }
        }
    }

});