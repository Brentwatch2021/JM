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
        public async Task<IActionResult> PutJM_User(int id, JM_User jM_User)
        {
            if (id != jM_User.Id)
            {
                return BadRequest();
            }

            _context.Entry(jM_User).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JM_UserExists(id))
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
        [Consumes("multipart/form-data")]
        public async Task<HttpResponseMessage> PostJM_User([FromForm] JM_User jM_User)
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

                    using (var userProfileStream = new FileStream(FullPathAndNewFileName, FileMode.Create))
                    {
                        await jM_User.ProfilePhoto.CopyToAsync(userProfileStream);
                    }

                }
               
                _context.Users.Add(jM_User);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            return new HttpResponseMessage(HttpStatusCode.NoContent);
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
