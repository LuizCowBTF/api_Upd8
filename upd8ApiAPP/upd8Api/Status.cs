using System.ComponentModel.DataAnnotations;

namespace upd8Api
{
    public class Status
    {
        public int Id { get; set; }
        [StringLength(20)]

        public string statusCliente { get; set; } = string.Empty;
    }
}
