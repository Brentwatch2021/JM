using JM_Server_Side.Models.JM_Client_Lib;
using JM_Server_Side.Models.JM_Contacts_Lib;
using JM_Server_Side.Models.JM_Payslip_Lib;
using JM_Server_Side.Models.JM_Tool_Lib;
using JM_Server_Side.Models.JM_Vehicle_Lib;
using Microsoft.EntityFrameworkCore;

namespace JM_Server_Side.Models.JM_Job_Sub_Properties_Context
{
    public class JM_Job_Sub_Properties_Context : DbContext
    {
        public JM_Job_Sub_Properties_Context(DbContextOptions<JM_Job_Sub_Properties_Context> options) : base(options)
        {
        }


        public DbSet<JM_Tool> Tools { get; set; }

        public DbSet<JM_Vehicle> Vehicles { get; set; }

        public DbSet<JM_Client> Clients { get; set; }

        public DbSet<JM_Payslip> Payslips { get; set; }

        // POPI ACT APPROVAL AND GDPR INVESTIGATE BEFORE DB Migration
        //public DbSet<JM_Contact> MyProperty { get; set; }
    }
}
