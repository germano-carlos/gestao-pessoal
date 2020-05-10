using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using gestao_pessoal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace gestao_pessoal.Controllers
{
    public class UsuarioController : Controller
    {
        // GET: Usuario
        public ActionResult Index()
        {
            return View("Views/Usuario/home.cshtml");
        }

        // GET: Usuario/Create
        public ActionResult Create()
        {
            return View("Views/Home/cadastro.cshtml");
        }

        // POST: Usuario/Create
        [HttpPost]
        public ActionResult Create(string useremail, string username, string userpassword)
        {
            try
            {
                Usuario usuario = Usuario.criar(useremail, username, userpassword);
                return RedirectToRoute(new { controller = "Home", action = "Index" });
            }
            catch (MySqlException e)
            {
                return RedirectToRoute(new { controller = "Usuario", action = "Create" });
            }
        }

        public ActionResult checkCredentialsAndLog(string username, string userpassword)
        {
            try
            { 
                Usuario usuario = Usuario.obter(username, userpassword);

                if(usuario == null)
                    return RedirectToRoute(new { controller = "Home", action = "Index" });

                return RedirectToRoute(new { controller = "Usuario", action = "Index" });
            }
            catch (MySqlException e)
            {
                return RedirectToRoute(new { controller = "Home", action = "Index" });
            }
        }
    }
}