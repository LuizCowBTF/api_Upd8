using System.ComponentModel.DataAnnotations;

namespace upd8Api
{
    public class ClienteTipo
    {
        public int Id { get; set; }
        [StringLength(20)]

        public string CLienteTipo { get; set;} = string.Empty;
    }
}
