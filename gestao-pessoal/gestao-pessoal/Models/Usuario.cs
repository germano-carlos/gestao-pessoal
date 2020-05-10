using Microsoft.CodeAnalysis.CSharp.Syntax;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;

namespace gestao_pessoal.Models
{
    public class Usuario
    {
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }
        public bool logado { get; set; }

        public Usuario()
        {

        }
        public Usuario(string useremail, string username, string userpassword)
        {
            this.email = useremail;
            this.nome = username;
            this.senha = userpassword;
        }

        public static Usuario obter(string referencia, string senha)
        {
            Conexao conexao = new Conexao(TipoConexao.Conexao.Classe);
            Usuario usuario = new Usuario();

            conexao.OpenConexao();
            MySqlDataReader reader;
            string query = String.Format("SELECT * FROM usuario where (email = '{0}' or nome = '{0}') and senha = '{1}'",referencia,senha);
            MySqlCommand cmd = new MySqlCommand(query, conexao.conn);
            cmd.CommandType = System.Data.CommandType.Text;

            reader = cmd.ExecuteReader();

            if (reader.Read())
            {
                usuario.email = (string)reader["email"];
                usuario.nome = (string)reader["nome"];
                usuario.senha = (string)reader["senha"];
                usuario.logado = true;
            }
            else
            {
                usuario = null;
            }

            conexao.CloseConexao();

            return usuario;
        }

        public static Usuario criar(string useremail, string username, string userpassword)
        {
            
            Conexao conexao = new Conexao(TipoConexao.Conexao.Classe);
            Usuario usuario = new Usuario();

            conexao.OpenConexao();
            MySqlDataReader reader;
            string query = String.Format("INSERT INTO usuario (nome,email,senha) VALUES ( '{0}', '{1}', '{2}')", username, useremail, userpassword);
            MySqlCommand cmd = new MySqlCommand(query, conexao.conn);
            cmd.CommandType = System.Data.CommandType.Text;

            reader = cmd.ExecuteReader();

            conexao.CloseConexao();
            
            usuario.email = useremail;
            usuario.nome = username;
            usuario.senha = userpassword;
            usuario.logado = true;

            return usuario;
        }
    }
}
