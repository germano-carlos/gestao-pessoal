
function submitFunction(event) {
    let check = false;
    event.preventDefault();

    const inputEmail = document.querySelector('input[name=username]').value;
    const inputSenha = document.querySelector('input[name=userpassword]').value;
    for (i = 0; i < db.customerdata.length; i++) {
            if (inputEmail == db.customerdata[i].email && inputSenha == db.customerdata[i].senha) 
            {
                let task = [];
                check = true;
                
                localStorage.setItem("id",db.customerdata[i].id)
                localStorage.setItem("email",db.customerdata[i].id)
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
