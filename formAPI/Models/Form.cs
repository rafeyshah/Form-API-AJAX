using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace formAPI.Models
{
    public class Form
    {
        [Key]
        public string Email { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public int No { get; set; }
        public string Pass { get; set; }
    }
}
