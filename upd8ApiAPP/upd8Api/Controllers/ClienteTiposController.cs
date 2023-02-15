using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using upd8Api;
using upd8Api.Data;

namespace upd8Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteTiposController : ControllerBase
    {
        private readonly DataContext _context;

        public ClienteTiposController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ClienteTipoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClienteTipo>>> GetClienteTipos()
        {
            return await _context.ClienteTipos.ToListAsync();
        }

        // GET: api/ClienteTipoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClienteTipo>> GetClienteTipo(int id)
        {
            var clienteTipo = await _context.ClienteTipos.FindAsync(id);

            if (clienteTipo == null)
            {
                return NotFound();
            }

            return clienteTipo;
        }

        // PUT: api/ClienteTipoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClienteTipo(int id, ClienteTipo clienteTipo)
        {
            if (id != clienteTipo.Id)
            {
                return BadRequest();
            }

            _context.Entry(clienteTipo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteTipoExists(id))
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

        // POST: api/ClienteTipoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClienteTipo>> PostClienteTipo(ClienteTipo clienteTipo)
        {
            _context.ClienteTipos.Add(clienteTipo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClienteTipo", new { id = clienteTipo.Id }, clienteTipo);
        }

        // DELETE: api/ClienteTipoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClienteTipo(int id)
        {
            var clienteTipo = await _context.ClienteTipos.FindAsync(id);
            if (clienteTipo == null)
            {
                return NotFound();
            }

            _context.ClienteTipos.Remove(clienteTipo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClienteTipoExists(int id)
        {
            return _context.ClienteTipos.Any(e => e.Id == id);
        }
    }
}
