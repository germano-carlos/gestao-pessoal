using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gestao_pessoal.Models
{
    public class Usuario
    {
        public string nome { get; set; }
        public string email { get; set; }
        public string senha { get; set; }

        public Usuario(string useremail, string username, string userpassword)
        {
            this.email = useremail;
            this.nome = username;
            this.senha = userpassword;
        }
    }
}
