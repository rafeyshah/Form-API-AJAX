using formAPI.Data;
using formAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace formAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    {
        private ApiDbContext _dbContext;

        public FormController(ApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        // GET: api/<FormController>
        [HttpGet]
        public IEnumerable<Form> Get()
        {
            return _dbContext.Forms;
        }

        // GET api/<FormController>/5
        [HttpGet("{id}")]
        public Form Get(int id)
        {
            var form = _dbContext.Forms.Find(id);
            return form;
        }

        // POST api/<FormController>
        [HttpPost]
        public void Post([FromBody] Form form)
        {
            _dbContext.Forms.Add(form);
            _dbContext.SaveChanges();
        }

        // PUT api/<FormController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Form formObj)
        {
          var form =  _dbContext.Forms.Find(id);
            form.City = formObj.City;
            form.Email = formObj.Email;
            form.Name = formObj.Name;
            form.No = formObj.No;
            form.Pass = formObj.Pass;
            _dbContext.SaveChanges();
        }

        // DELETE api/<FormController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var form = _dbContext.Forms.Find(id);
            _dbContext.Forms.Remove(form);
            _dbContext.SaveChanges();
                }
    }
}
