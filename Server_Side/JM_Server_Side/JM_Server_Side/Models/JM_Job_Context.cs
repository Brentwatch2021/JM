using Microsoft.EntityFrameworkCore;

namespace JM_Server_Side.Models
{
    public class JM_Job_Context : DbContext
    {
        public JM_Job_Context(DbContextOptions<JM_Job_Context> options) : base(options)
        {
        }

        public DbSet<JM_Job> jobs { get; set; }
    }
}
