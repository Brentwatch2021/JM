using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JM_Server_Side.Models.JM_Job_Sub_Properties_Context;
using JM_Server_Side.Models.JM_Vehicle_Lib;
using System.IO;

namespace JM_Server_Side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JM_VehicleController : ControllerBase
    {
        private readonly JM_Job_Sub_Properties_Context _context;

        public JM_VehicleController(JM_Job_Sub_Properties_Context context)
        {
            _context = context;
        }

        // GET: api/JM_Vehicle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JM_Vehicle>>> GetVehicles()
        {
            return await _context.Vehicles.ToListAsync();
        }

        // GET: api/JM_Vehicle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JM_Vehicle>> GetJM_Vehicle(int id)
        {
            var jM_Vehicle = await _context.Vehicles.FindAsync(id);

            if (jM_Vehicle == null)
            {
                return NotFound();
            }

            return jM_Vehicle;
        }

        // PUT: api/JM_Vehicle/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJM_Vehicle(int id, JM_Vehicle jM_Vehicle)
        {
            if (id != jM_Vehicle.Id)
            {
                return BadRequest();
            }

            _context.Entry(jM_Vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JM_VehicleExists(id))
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

        // POST: api/JM_Vehicle
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<JM_Vehicle>> PostJM_Vehicle(JM_Vehicle jM_Vehicle)
        {
            try
            {
                _context.Vehicles.Add(jM_Vehicle);
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            { 
            }
            

            return CreatedAtAction("GetJM_Vehicle", new { id = jM_Vehicle.Id }, jM_Vehicle);
        }

        [HttpPost("UploadVehicleImage")]
        public void UploadVehicleImage(IFormFile imageOfVehicle)
        {
            try
            {
                string fileNameAndPath = string.Format("UserUploadedData/Vehicles/{0}", imageOfVehicle.FileName);
                var vehicleImageStream = new FileStream(fileNameAndPath, FileMode.Create);
                // Unable to use async here as when this api method goes out of scope it loses the file
                // need to improve
                imageOfVehicle.CopyTo(vehicleImageStream);
            }
            catch (Exception e)
            {
                
            }
        }

        // DELETE: api/JM_Vehicle/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<JM_Vehicle>> DeleteJM_Vehicle(int id)
        {
            var jM_Vehicle = await _context.Vehicles.FindAsync(id);
            if (jM_Vehicle == null)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(jM_Vehicle);
            await _context.SaveChangesAsync();

            return jM_Vehicle;
        }



        private bool JM_VehicleExists(int id)
        {
            return _context.Vehicles.Any(e => e.Id == id);
        }
    }
}
