
function submitFunction(event) {
    let check = false;
    event.preventDefault();

    const inputEmail = document.querySelector('input[name=username]').value;
    const inputSenha = document.querySelector('input[name=userpassword]').value;
    for (i = 0; i < db.customerdata.length; i++) {
            if (inputEmail == db.customerdata[i].email && inputSenha == db.customerdata[i].senha) 
            {
                check = true;
                
                localStorage.setItem("id",db.customerdata[i].id)
                localStorage.setItem("email",db.customerdata[i].id)
                localStorage.setItem("nome",db.customerdata[i].nome)
                localStorage.setItem("dependentes",db.customerdata[i].dependentes)
                localStorage.setItem("sexo",db.customerdata[i].sexo)

                alert("Usuario encontrado, você será redirecionado");
                window.location.replace("home.html")
            }
    }

    if(!check)
        alert("Usuario ou Senha Incorretos, tente novamente");
}
