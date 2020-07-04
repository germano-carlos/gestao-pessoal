var db = {
    customerdata: [
        {
            "id": 1,
            "nome": "Carlos Germano Avelar Carvalho",
            "email": "germano.carlos2712@gmail.com",
            "senha": "123456",
            "dependentes": ['2'],
            "sexo": "M",
            "status": 'active'
        },
        {
            "id": 2,
            "nome": "Marcelo Teixeira",
            "email": "blablabla@gmail.com",
            "senha": "123456",
            "dependentes": [],
            "sexo": "M",
            "status": 'active'
        },
        {
            "id": 200,
            "nome": "Marcelo Teixeira Dois",
            "email": "blablabla@gmail.com",
            "senha": "123456",
            "dependentes": [],
            "sexo": "M",
            "status": 'active'
        }
    ],
    tasksdata: [
        {
            "id": 1,
            "nome": "Arrumar a casa",
            "prioridade_id": 1,
            "responsavel_id": 1,
            "possui_dependente": false,
            "data_cadastro": null,
            "data_limite": '2020-06-07 20:50:00',
            "status": 'Não Finalizado'
        },
        {
            "id": 2,
            "nome": "Fazer compras",
            "prioridade_id": 2,
            "responsavel_id": 2,
            "possui_dependente": true,
            "data_cadastro":"2020-06-07",
            "data_limite": "2020-06-07 17:00:00",
            "status": 'Não Finalizado'
        },
        {
            "id": 3,
            "nome": "Levar o juninho pra passear",
            "prioridade_id": 3,
            "responsavel_id": 3,
            "possui_dependente": true,
            "data_cadastro":"2020-06-07",
            "data_limite": "2020-06-07 09:00:00",
            "status": 'Não Finalizado'
        },
        {
            "id": 4,
            "nome": "Pagar as contas da minha avó",
            "prioridade_id": 4,
            "responsavel_id": 3,
            "possui_dependente": false,
            "data_cadastro":"2020-06-07",
            "data_limite": null,
            "status": 'Não Finalizado'
        },
        {
            "id": 5,
            "nome": "Comprar um telefone novo",
            "prioridade_id": 5,
            "responsavel_id": 4,
            "possui_dependente": false,
            "data_cadastro":"2020-06-07",
            "data_limite": null,
            "status": 'Não Finalizado'
        },
        {
            "id": 6,
            "nome": "Entregar trabalho de TIAW",
            "prioridade_id": 1,
            "responsavel_id": 4,
            "possui_dependente": false,
            "data_cadastro":"2020-06-07",
            "data_limite": null,
            "status": 'Não Finalizado'
        },
        {
            "id": 7,
            "nome": "Testes Plataforma",
            "prioridade_id": 1,
            "responsavel_id": 1,
            "possui_dependente": false,
            "data_cadastro":"2020-06-07",
            "data_limite": "2020-06-14 15:00:00",
            "status": 'Não Finalizado'
        },
    ],
    setting: [
        {
            "id": 1,
            "nome": "Muito Alta",
            "tempo_estimado": 2, //Tempo calculado em horas
        },
        {
            "id": 2,
            "nome": "Alta",
            "tempo_estimado": 4, //Tempo calculado em horas
        },
        {
            "id": 3,
            "nome": "Média",
            "tempo_estimado": 8, //Tempo calculado em horas
        },
        {
            "id": 4,
            "nome": "Baixa",
            "tempo_estimado": 12, //Tempo calculado em horas
        },
        {
            "id": 5,
            "nome": "Muito Baixa",
            "tempo_estimado": 24, //Tempo calculado em horas
        }
    ],
    tasksettings: [
        {
            "id":1,
            "type":"Concluído",
            "text": "text-success mr-1"
        },
        {
            "id":2,
            "type":"Atrasado",
            "text": "text-danger mr-1"
        },
        {
            "id":3,
            "type":"Alerta",
            "text": "text-warning mr-1"
        }
    ]
}
