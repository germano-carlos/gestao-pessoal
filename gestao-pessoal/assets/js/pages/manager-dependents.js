$(document).ready(() => {
    db.customerdata = JSON.parse(localStorage.getItem("users"));


    var object = JSON.parse(localStorage.getItem("tasks"));
    var dependentes = localStorage.getItem("dependentes").split(',')
    var htmlTask = montaHTML(localStorage.getItem("id"));

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
        var checked = dependent.status == 'active' ? 'checked' : '';

        return htmlTask = `<tr class="task-item">' 
                        <td data-id="${ dependent.id }" style="width: 60px;">
                            <img src="assets/images/users/user-2.jpg" alt="" class="thumb-sm rounded-circle">
                        </td>
                        <td> ${dependent.nome}
                           <p class="m-0 text-muted">On 02 Jun, 2019</p>
                        </td>
                        <td>
                            ${dependent.tarefas}
                        </td>
                        <td>
                            ${dependent.sexo}
                        </td>
                        <td>
                            ${dependent.email}
                        </td>
                        <td>
                            <input ${checked} class="checkdep" name="switch${db.customerdata[i].id}" type="checkbox" id="switch${db.customerdata[i].id}" switch="bool"/>
                            <label for="switch${db.customerdata[i].id}" data-on-label="On" data-off-label="Off"></label>
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

    $(document).on("click", ".checkdep", function(){
        var userId = $(this).closest('tr').find('td[data-id]').data('id');
        var name = 'switch'+userId;

        $('#'+name).change(() => {
            if(!this.checked)
            {
                for(c=0;c<db.customerdata.length;c++)
                {
                    if(db.customerdata[c].id == userId)
                    {
                        db.customerdata[c].status = 'Inactive';
                        localStorage.setItem("users", JSON.stringify(db.customerdata));
                        document.location.reload();
                    }
                }
            }
            else
            {
                for(c=0;c<db.customerdata.length;c++)
                {
                    if(db.customerdata[c].id == userId)
                    {
                        db.customerdata[c].status = 'active';
                        localStorage.setItem("users", JSON.stringify(db.customerdata));
                        document.location.reload();
                    }
                }
            }
        })
    })
});