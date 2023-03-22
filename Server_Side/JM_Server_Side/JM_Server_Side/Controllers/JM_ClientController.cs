using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JM_Server_Side.Models.JM_Client_Lib;
using JM_Server_Side.Models.JM_Job_Sub_Properties_Context;

namespace JM_Server_Side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JM_ClientController : ControllerBase
    {
        private readonly JM_Job_Sub_Properties_Context _context;

        public JM_ClientController(JM_Job_Sub_Properties_Context context)
        {
            _context = context;
        }

        // GET: api/JM_Client
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JM_Client>>> GetClients()
        {
            return await _context.Clients.ToListAsync();
        }

        // GET: api/JM_Client/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JM_Client>> GetJM_Client(int id)
        {
            var jM_Client = await _context.Clients.FindAsync(id);

            if (jM_Client == null)
            {
                return NotFound();
            }

            return jM_Client;
        }

        // PUT: api/JM_Client/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJM_Client(int id,[FromBody] JM_Client jM_Client)
        {
            if (id != jM_Client.Id)
            {
                return BadRequest();
            }

            _context.Entry(jM_Client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JM_ClientExists(id))
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

        // POST: api/JM_Client
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JM_Client>> PostJM_Client(JM_Client jM_Client)
        {
            _context.Clients.Add(jM_Client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJM_Client", new { id = jM_Client.Id }, jM_Client);
        }

        // DELETE: api/JM_Client/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JM_Client>> DeleteJM_Client(int id)
        {
            var jM_Client = await _context.Clients.FindAsync(id);
            if (jM_Client == null)
            {
                return NotFound();
            }

            _context.Clients.Remove(jM_Client);
            await _context.SaveChangesAsync();

            return jM_Client;
        }

        private bool JM_ClientExists(int id)
        {
            return _context.Clients.Any(e => e.Id == id);
        }
    }
}
