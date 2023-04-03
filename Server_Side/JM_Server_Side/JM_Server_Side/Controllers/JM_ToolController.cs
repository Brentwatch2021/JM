using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JM_Server_Side.Models.JM_Job_Sub_Properties_Context;
using JM_Server_Side.Models.JM_Tool_Lib;
using System.IO;

namespace JM_Server_Side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JM_ToolController : ControllerBase
    {
        private readonly JM_Job_Sub_Properties_Context _context;

        public JM_ToolController(JM_Job_Sub_Properties_Context context)
        {
            _context = context;
        }

        // GET: api/JM_Tool
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JM_Tool>>> GetTools()
        {
            return await _context.Tools.ToListAsync();
        }

        // GET: api/JM_Tool/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JM_Tool>> GetJM_Tool(int id)
        {
            var jM_Tool = await _context.Tools.FindAsync(id);

            if (jM_Tool == null)
            {
                return NotFound();
            }

            return jM_Tool;
        }

        // PUT: api/JM_Tool/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJM_Tool(int id, JM_Tool jM_Tool)
        {
            if (id != jM_Tool.Id)
            {
                return BadRequest();
            }

            _context.Entry(jM_Tool).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JM_ToolExists(id))
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

        // POST: api/JM_Tool
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JM_Tool>> PostJM_Tool(JM_Tool jM_Tool)
        {
            _context.Tools.Add(jM_Tool);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJM_Tool", new { id = jM_Tool.Id }, jM_Tool);
        }

        [HttpPost("UploadImageOfTool")]
        public void UploadImageOfTool(IFormFile imageOfTool)
        {
            // EXTREMELY BAD PRACTISE
            string filenameAndPath = "UserUploadedData/Tools/" + imageOfTool.FileName;
            var toolImageStream = new FileStream(filenameAndPath, FileMode.Create);
            // Unable to use async here as when this api method goes out of scope it loses the file
            // need to improve
            imageOfTool.CopyTo(toolImageStream);
            
        }


        // DELETE: api/JM_Tool/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JM_Tool>> DeleteJM_Tool(int id)
        {
            var jM_Tool = await _context.Tools.FindAsync(id);
            if (jM_Tool == null)
            {
                return NotFound();
            }

            _context.Tools.Remove(jM_Tool);
            await _context.SaveChangesAsync();

            return jM_Tool;
        }

        private bool JM_ToolExists(int id)
        {
            return _context.Tools.Any(e => e.Id == id);
        }
    }
}
