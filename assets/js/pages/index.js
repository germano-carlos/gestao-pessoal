
function submitFunction(event) {
    let check = false;
    event.preventDefault();

    const inputEmail = document.querySelector('input[name=username]').value;
    const inputSenha = document.querySelector('input[name=userpassword]').value;
    var userRegister = JSON.parse(localStorage.getItem("register"));

    for(j=0;j<userRegister.length;j++)
    {
        if (inputEmail == userRegister[j].email && inputSenha == userRegister[j].senha) 
        {
            let task1 = [];
            check = true;
            
            localStorage.setItem("id",userRegister[j].id)
            localStorage.setItem("email",userRegister[j].email)
            localStorage.setItem("nome",userRegister[j].nome)
            localStorage.setItem("dependentes",userRegister[j].dependentes)
            localStorage.setItem("sexo",userRegister[j].sexo)
            
            for(k = 0; k < db.tasksdata.length; k++)
            {
                if((userRegister[j].id == db.tasksdata[k].responsavel_id))
                {
                    task1.push(db.tasksdata[k]);
                }
                else if (db.tasksdata[k].possui_dependente)
                {
                    for(j = 0; j < userRegister[j].dependentes.length; j++)
                    {
                        if(userRegister[j].dependentes[j] == db.tasksdata[k].responsavel_id)
                        {
                            task1.push(db.tasksdata[k]);
                        }
                    }
                }
            }

            localStorage.setItem("tasks", JSON.stringify(task1));
            localStorage.setItem("users", JSON.stringify(db.customerdata));
            alert("Usuario encontrado, você será redirecionado");
            window.location.replace("home.html")
        }
    }

    for (i = 0; i < db.customerdata.length; i++) {
            if (inputEmail == db.customerdata[i].email && inputSenha == db.customerdata[i].senha) 
            {
                let task = [];
                check = true;
                
                localStorage.setItem("id",db.customerdata[i].id)
                localStorage.setItem("email",db.customerdata[i].email)
                localStorage.setItem("nome",db.customerdata[i].nome)
                localStorage.setItem("dependentes",db.customerdata[i].dependentes)
                localStorage.setItem("sexo",db.customerdata[i].sexo)
                
                for(k = 0; k < db.tasksdata.length; k++)
                {
                    if((db.customerdata[i].id == db.tasksdata[k].responsavel_id))
                    {
                        task.push(db.tasksdata[k]);
                    }
                    else if (db.tasksdata[k].possui_dependente)
                    {
                        for(j = 0; j < db.customerdata[i].dependentes.length; j++)
                        {
                            if(db.customerdata[i].dependentes[j] == db.tasksdata[k].responsavel_id)
                            {
                                task.push(db.tasksdata[k]);
                            }
                        }
                    }
                }

                localStorage.setItem("tasks", JSON.stringify(task));
                localStorage.setItem("users", JSON.stringify(db.customerdata));
                alert("Usuario encontrado, você será redirecionado");
                window.location.replace("home.html")
            }
    }

    if(!check)
        alert("Usuario ou Senha Incorretos, tente novamente");
}
