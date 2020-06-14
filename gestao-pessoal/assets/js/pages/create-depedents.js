$(document).ready(() => {
    db.customerdata = JSON.parse(localStorage.getItem("users"));
    

    $('#createDependents').click((event) => {

        
        event.preventDefault();
        var dependentSex = $(".dep option:selected").val();
        var dependentEmail = $('input[name=dependentemail]').val();
        var dependentName = $('input[name=dependentname]').val();
        var dependenteRelacionado = false;
        var dependenteExistente = false;
        var indice = 0;
        var indiceDependente = 0;
        let dependentes = localStorage.getItem("dependentes").split(',')

        if(typeof dependentSex == 'undefined' || dependentEmail == '' || dependentName == '')
            alert("Por favor, preencha com o restante das informações");
        

        for(i = 0; i < db.customerdata.length; i++)
        {
            if(db.customerdata[i].email ==  dependentEmail)
            {
                dependenteExistente = true;
            }
            if(db.customerdata[i].id == localStorage.getItem("id"))
            {
                indice = i;
            }

            for (j = 0; j < db.customerdata.length; j++)
            {
                for (k = 0; k < db.customerdata[i].dependentes.length; k++)
                {
                    if(db.customerdata[i].dependentes[k] == db.customerdata[j].id 
                        && db.customerdata[i].id == localStorage.getItem("id")
                        && db.customerdata[j].email ==  dependentEmail)
                    {
                        alert("Dependente já está cadastrado !");
                        dependenteRelacionado = true;
                        indiceDependente = i;
                    }
                }
            }
        }

        if(!dependenteExistente)
        {
            var newUser = JSON.stringify({
                id: db.customerdata[db.customerdata.length-1].id + 1,
                nome: dependentName,
                email: dependentEmail,
                senha: "gestaopessoal"+ Math.random(10000),
                dependentes: [],
                sexo: dependentSex
            })

            db.customerdata.push(JSON.parse(newUser));

            db.customerdata[indice].dependentes.push(db.customerdata[db.customerdata.length-1].id);
            localStorage.setItem("users", JSON.stringify(db.customerdata));
            localStorage.setItem("dependentes",db.customerdata[indice].dependentes)

            alert('Dependente Criado com Sucesso');
        }
        else if (!dependenteRelacionado)
        {
            db.customerdata[indice].dependentes.push(db.customerdata[indiceDependente].id);
            localStorage.setItem("users", JSON.stringify(db.customerdata));
            localStorage.setItem("dependentes", db.customerdata[indice].dependentes)

            alert('Dependente Criado com Sucesso');
        }
    })

});