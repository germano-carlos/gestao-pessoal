$(document).ready(() => {

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


    $('#createTask').click((event) => {

        event.preventDefault();
        var taskName = $('input[name=taskName]').val();
        var responsavelId = $(".resp option:selected").val();
        var priorityId = $("#priorityName option:selected").val();
        var date = $('input[name=date]').val();
        console.log(taskName,date );
        if((typeof taskName ==  'undefined' || typeof responsavelId ==  'undefined' ||  typeof priorityId ==  'undefined')   
            || ( taskName ==  '' ||  responsavelId ==  '' ||   priorityId ==  '')  )
        {
            alert('Por favor preencha todos os campos faltantes');
        }
        else{
            var data = new Date();

            if(typeof date == 'undefined' || date == '')
                var dataLimite = dateCalculator(priorityId, data);
            else
                var dataLimite = date;

            // Guarda cada pedaço em uma variável
            var dia     = data.getDate();           // 1-31
            var mes     = data.getMonth();          // 0-11 (zero=janeiro)
            var ano     = data.getFullYear();       // 4 dígitos
            var hora    = data.getHours();          // 0-23
            var min     = data.getMinutes();        // 0-59
            var seg     = data.getSeconds();        // 0-59

            var tasks = JSON.parse(localStorage.getItem("tasks"));

            var newTask = JSON.stringify({
                id: tasks[tasks.length-1].id + 1,
                nome: taskName,
                prioridade_id: priorityId,
                responsavel_id: responsavelId,
                possui_dependente: localStorage.getItem("id") == responsavelId ? false : true,
                data_cadastro: ano + '-' + mes + '-' + dia + ' ' + hora + ':' + min + ':' + seg,
                data_limite: dataLimite
            })

            tasks.push(JSON.parse(newTask));

            localStorage.setItem("tasks", JSON.stringify(tasks))

        }
    })

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
    
});