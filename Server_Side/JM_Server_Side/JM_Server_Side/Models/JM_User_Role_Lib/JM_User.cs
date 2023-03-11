using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JM_Server_Side.Models.JM_User_Role_Lib
{
    public class JM_User
    {
        [Key]
        public int Id  { get; set; }

        public string Name { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        [NotMapped]
        public IFormFile ProfilePhoto { get; set; }

        public string ProfilePhotoMIMEType { get; set; }

        public string ProfilePhotoURL { get; set; }


    }
}
