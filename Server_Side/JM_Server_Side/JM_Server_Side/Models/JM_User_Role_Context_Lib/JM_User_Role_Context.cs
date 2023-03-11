using JM_Server_Side.Models.JM_User_Role_Lib;
using Microsoft.EntityFrameworkCore;

namespace JM_Server_Side.Models.JM_User_Role_Context_Lib
{
    public class JM_User_Role_Context : DbContext
    {
        public JM_User_Role_Context(DbContextOptions<JM_User_Role_Context> options) : base(options)
        {
        }


        public DbSet<JM_User> Users { get; set; }
    }
}
