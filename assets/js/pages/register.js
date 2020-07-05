
$('#createAccount').click(function createAccount(event)
{
    event.preventDefault();
    var nome  = $('input[name=username]').val();
    var email = $('input[name=useremail]').val();;
    var senha =  $('input[name=userpassword]').val();;
    var sexo  = $(".sex option:selected").val();;
    
    if(typeof sexo == 'undefined' || email == '' || nome == '' || senha == '')
    {
        alert("Por favor, preencha com o restante das informações");
        window.location.reload();
    }
    else
    {
        var jsonUsuarios = localStorage.getItem("register");
        var cart = JSON.parse(jsonUsuarios);

        var id = jsonUsuarios != null ? cart[cart.length - 1].id + 1 : 1000;
        var item = {
            id,
            nome,
            email,
            senha,
            dependentes: [],
            sexo,
            status:'active'
        };

        if(jsonUsuarios != null)
        {
            cart.push(item);
            localStorage.setItem('register', JSON.stringify(cart));
        }
        else
        {
            localStorage.setItem('register', JSON.stringify([item]));
        }

        alert("Usuário Criado com sucesso, favor voltar a tela inicial e fazer o login");
    }

    
})
