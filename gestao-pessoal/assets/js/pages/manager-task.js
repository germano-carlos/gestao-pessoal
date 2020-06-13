$(document).ready(() => {

    alert('carregou');
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
});