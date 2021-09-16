using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace formAPI.Models
{
    public class Form
    {
        [Key]
        public int id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public long No { get; set; }
        public string Pass { get; set; }
    }
}
