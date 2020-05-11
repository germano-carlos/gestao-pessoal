using MySql.Data.MySqlClient;
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
        public string obs { get; set; }
        public bool realizado { get; set; }




        public Tarefas()
        {

        }
        public Tarefas(string nomeTarefa, string dataInicio, string dataFim, string prioridades, string obs)
        {
            this.nomeTarefa = nomeTarefa;
            this.horaExecucaoInicio = dataInicio;
            this.horaExecucaoFim = dataFim;
            this.realizado = false;
            this.deparaPrioridade(prioridades);
        }

        public static Tarefas criar(string nomeTarefa, string dataInicio, string dataFim, string prioridades, string obs)
        {

            Conexao conexao = new Conexao(TipoConexao.Conexao.Classe);
            Tarefas tarefas = new Tarefas();

            if (String.IsNullOrEmpty(nomeTarefa))
                throw new Exception("O nome da tarefa é necessário, favor inserir");
                
            dataFim = String.IsNullOrEmpty(dataFim) ? "Não especificado" : dataFim;
            dataInicio = String.IsNullOrEmpty(dataInicio) ? DateTime.Now.ToString("yyyy-mm-dd") : dataInicio;
            prioridades = String.IsNullOrEmpty(prioridades) ? Prioridade.BAIXA.ToString() : prioridades;
            obs = String.IsNullOrEmpty(obs) ? "Não especificado" : obs;

            conexao.OpenConexao();
            MySqlDataReader reader;
            string query = String.Format("INSERT INTO tarefa (nome,data_inicio,data_fim,observacoes,prioridade_id) VALUES ( '{0}', '{1}', '{2}', '{3}', '{4}')",nomeTarefa,dataInicio,dataFim,obs,prioridades);
            MySqlCommand cmd = new MySqlCommand(query, conexao.conn);
            cmd.CommandType = System.Data.CommandType.Text;

            reader = cmd.ExecuteReader();

            conexao.CloseConexao();

            tarefas.nomeTarefa = nomeTarefa;
            tarefas.horaExecucaoInicio = dataInicio;
            tarefas.horaExecucaoFim = dataFim;
            tarefas.realizado = false;
            tarefas.deparaPrioridade(prioridades);

            return tarefas;
        }

        private void deparaPrioridade(string prioridades)
        {
            if (prioridades == "0")
                throw new Exception("Não selecionado nenhum tipo de prioridade, favor inserir algum");
            if (prioridades == "1")
                this.prioridadeTipo = Prioridade.MUITO_BAIXA;
            if (prioridades == "2")
                this.prioridadeTipo = Prioridade.BAIXA;
            if (prioridades == "3")
                    this.prioridadeTipo = Prioridade.MEDIA;
            if (prioridades == "4")
                this.prioridadeTipo = Prioridade.ALTA;
            if (prioridades == "5")
                this.prioridadeTipo = Prioridade.MUITO_ALTA;
        }
    }
}
