using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JM_Server_Side.Models;

namespace JM_Server_Side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JM_JobController : ControllerBase
    {
        private readonly JM_Job_Context _context;

        public JM_JobController(JM_Job_Context context)
        {
            _context = context;
        }

        // GET: api/JM_Job
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JM_Job>>> Getjobs()
        {
            return await _context.jobs.ToListAsync();
        }

        // GET: api/JM_Job/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JM_Job>> GetJM_Job(int id)
        {
            var jM_Job = await _context.jobs.FindAsync(id);

            if (jM_Job == null)
            {
                return NotFound();
            }

            return jM_Job;
        }

        // PUT: api/JM_Job/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJM_Job(int id, JM_Job jM_Job)
        {
            if (id != jM_Job.id)
            {
                return BadRequest();
            }

            _context.Entry(jM_Job).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JM_JobExists(id))
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

        // POST: api/JM_Job
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JM_Job>> PostJM_Job(JM_Job jM_Job)
        {
            _context.jobs.Add(jM_Job);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJM_Job", new { id = jM_Job.id }, jM_Job);
        }

        // DELETE: api/JM_Job/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JM_Job>> DeleteJM_Job(int id)
        {
            var jM_Job = await _context.jobs.FindAsync(id);
            if (jM_Job == null)
            {
                return NotFound();
            }

            _context.jobs.Remove(jM_Job);
            await _context.SaveChangesAsync();

            return jM_Job;
        }

        private bool JM_JobExists(int id)
        {
            return _context.jobs.Any(e => e.id == id);
        }
    }
}
