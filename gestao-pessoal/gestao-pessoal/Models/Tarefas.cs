using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gestao_pessoal.Models
{
    public class Tarefas
    {
        public Prioridade prioridadeTipo { get; set; }
        public string nomeTarefa { get; set; }
        public string responsavelTarefa { get; set; }
        public string horaExecucaoInicio { get; set; }
        public string horaExecucaoFim { get; set; }
        public bool realizado { get; set; }
    }
}
