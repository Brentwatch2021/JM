using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace JM_Server_Side.Models.JM_Tool_Lib
{
    public class JM_Tool
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool CheckedInOutStatus { get; set; }

        // History might implement later
        public string History { get; set; }

        // ID of the user the tool is assigned to 
        public int AssignedTo { get; set; }

        public string Tool_Image_Path { get; set; }

        [NotMapped]
        public IFormFile Image_Of_Tool { get; set; }
    }
}
