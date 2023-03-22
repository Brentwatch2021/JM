using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JM_Server_Side.Models.JM_User_Role_Context_Lib;
using JM_Server_Side.Models.JM_User_Role_Lib;
using System.Net.Http;
using System.Net;
using System.IO;

namespace JM_Server_Side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JM_UserController : ControllerBase
    {
        private readonly JM_User_Role_Context _context;

        public JM_UserController(JM_User_Role_Context context)
        {
            _context = context;
        }

        // GET: api/JM_User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JM_User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/JM_User/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JM_User>> GetJM_User(int id)
        {
            var jM_User = await _context.Users.FindAsync(id);

            if (jM_User == null)
            {
                return NotFound();
            }

            return jM_User;
        }

        // PUT: api/JM_User/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> PutJM_User([FromForm] JM_User jM_User)
        {
            if (jM_User.Id != jM_User.Id)
            {
                return BadRequest();
            }


            if (jM_User?.ProfilePhoto != null)
            {
                // Save new file each time again for prototyping this is fine
                // however in production to might be better to remove old file from storage
                // but user might change thier mind and might want to use old photo
                // maybe an option for the user to either purge delete old photo or 
                // keep old photo
                Guid uniqueFileName = Guid.NewGuid();

                string relativePathForProfilePhotos = "UserUploadedData\\User\\ProfilePhotos\\";
                string finalFileName = $"{uniqueFileName}{jM_User.ProfilePhoto.FileName}";
                string DBRelativePath = $"{relativePathForProfilePhotos}{finalFileName}";

                string FullPathAndNewFileName = $"{Environment.CurrentDirectory}\\{relativePathForProfilePhotos}{finalFileName}";
                jM_User.ProfilePhotoURL = $"UserUploadedData/User/ProfilePhotos/{finalFileName}";
                jM_User.ProfilePhotoMIMEType = jM_User.ProfilePhoto.ContentType;

                using (var userProfileStream = new FileStream(FullPathAndNewFileName, FileMode.Create))
                {
                    await jM_User.ProfilePhoto.CopyToAsync(userProfileStream);
                }
            }
            
            _context.Entry(jM_User).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JM_UserExists(jM_User.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/JM_User
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        //[Consumes("multipart/form-data")]

        //public async Task<HttpResponseMessage> PostJM_User([FromForm] JM_User jM_User)
        //public async void PostJM_User([FromForm] JM_User jM_User)
        //public async Task<ActionResult<JM_User>> PostJM_User([FromForm] JM_User jM_User) 
        //public async Task<ActionResult<JM_User>> PostJM_User([FromBody] JM_User jM_User)
        public async Task<ActionResult<JM_User>> PostJM_User([FromBody]JM_User jM_User)
        {
            // try and improve this method to return the User object later


            try
            {
                
                // ProfilePhoto.FileName   name of file including extension
                // ProfilePhoto.Content Type MIME type
                // ProfilePhoto.Length Length in integer type

                if (jM_User != null && jM_User.ProfilePhoto != null)
                {
                    // Unique Name for the File Name to be saved
                    Guid uniqueFileName = Guid.NewGuid();
                 
                    string relativePathForProfilePhotos = "UserUploadedData\\User\\ProfilePhotos\\";
                    string finalFileName = $"{uniqueFileName}{jM_User.ProfilePhoto.FileName}";
                    string DBRelativePath = $"{relativePathForProfilePhotos}{finalFileName}";   

                    string FullPathAndNewFileName = $"{Environment.CurrentDirectory}\\{relativePathForProfilePhotos}{finalFileName}";
                    jM_User.ProfilePhotoURL = $"UserUploadedData/User/ProfilePhotos/{finalFileName}";
                    jM_User.ProfilePhotoMIMEType = jM_User.ProfilePhoto.ContentType;


                    // Might prevent the closed file exception
                    IFormFile FileToSave = jM_User.ProfilePhoto;

                    // Throwing context error
                    //using (var userProfileStream = new FileStream(FullPathAndNewFileName, FileMode.Create))
                    //{
                    //    await FileToSave.CopyToAsync(userProfileStream);
                    //}


                    // Move this into separate API method
                    //var userProfileStream = new FileStream(FullPathAndNewFileName, FileMode.Create);

                    //await FileToSave.CopyToAsync(userProfileStream);


                }
               
                _context.Users.Add(jM_User);
                await _context.SaveChangesAsync();

            }
            catch (Exception ex)
            {
                new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            return jM_User;
            //return new HttpResponseMessage(HttpStatusCode.OK);
            //return NoContent();
        }

        [HttpPost("UploadProfilePhoto")]
        //public async void UploadProfilePhoto(IFormFile profilePhoto)
        public void UploadProfilePhoto(IFormFile profilePhoto)
        {
            var filepathandName = "UserUploadedData/User/ProfilePhotos/" + profilePhoto.FileName;

            //using (var userProfileStream = new FileStream(filepathandName, FileMode.Create))
            //{
            //    await profilePhoto.CopyToAsync(userProfileStream);
            //}


            /// THIS IS EXTREMELY BAD PRACTISE WRITING FILES ON THE SAME THREAD AS the 
            /// API Instance can caus entire API to Crash but for demo purposes 
            /// we will continue with this approach
            var userProfileStream = new FileStream(filepathandName, FileMode.Create);
            //profilePhoto.CopyToAsync(userProfileStream);
            profilePhoto.CopyTo(userProfileStream);


        }

        // DELETE: api/JM_User/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JM_User>> DeleteJM_User(int id)
        {
            var jM_User = await _context.Users.FindAsync(id);
            if (jM_User == null)
            {
                return NotFound();
            }

            _context.Users.Remove(jM_User);
            await _context.SaveChangesAsync();

            return jM_User;
        }

        private bool JM_UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
