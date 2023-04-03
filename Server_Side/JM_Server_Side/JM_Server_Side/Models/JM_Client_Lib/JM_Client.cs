using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace JM_Server_Side.Models.JM_Client_Lib
{
    public class JM_Client
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Location { get; set; } 

        public string HTML_JobCard_Template { get; set; }

        public string HTML_Permit_Template { get; set; }

        /// <summary>
        /// BAD PRACTISE WORKAROUND string for list of contacts with - break
        /// </summary>
        public string Contacts { get; set; }

        public string Client_Logo_Path { get; set; }

        public string Client_Logo_MIME_Type { get; set; }

        [NotMapped]
        public IFormFile ClientLogo { get; set; }
    }
}
