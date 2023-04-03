using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace JM_Server_Side.Models.JM_Vehicle_Lib
{
    public class JM_Vehicle
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string RegNumber { get; set; }

        public string Kms { get; set; }

        // Vehicle History something we can implement later
        //public int Vehicle_History { get; set; }

        public bool CheckedInOutStatus { get; set; }

        public int Assigned_To { get; set; }

        public string Vehicle_Image_Path { get; set; }

        public string Vehicle_Image_MIME_Type { get; set; }

        [NotMapped]
        public IFormFile Vehicle_Photo { get; set; }
    }
}
