using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace JM_Server_Side.Models.JM_Payslip_Lib
{
    public class JM_Payslip
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string PayslipImagePath { get; set; }

        [NotMapped]
        public IFormFile Payslip { get; set; }
    }
}
