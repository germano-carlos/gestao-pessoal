using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gestao_pessoal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace gestao_pessoal.Controllers
{
    public class TarefasController : Controller
    {
        // GET: Tarefas
        public ActionResult Index()
        {
            return View("Views/Tarefas/criarTarefas.cshtml");
        }

        // GET: Tarefas/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Tarefas/Create
        public ActionResult Create()
        {
            return View("Views/Tarefas/criarTarefas.cshtml");
        }

        // POST: Tarefas/Create
        [HttpPost]
        public ActionResult Create(string nomeTarefa, string dataInicio, string dataFim, string prioridades, string obs)
        {
            try
            {
                Tarefas tarefa = Tarefas.criar( nomeTarefa,dataInicio,dataFim,prioridades,obs);
                return RedirectToRoute(new { controller = "Tarefas", action = "Create" });
            }
            catch
            {
                return View();
            }
        }

        // GET: Tarefas/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Tarefas/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Tarefas/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Tarefas/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}