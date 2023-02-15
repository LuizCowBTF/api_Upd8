using System.ComponentModel.DataAnnotations;

namespace upd8Api
{
    public class Cliente
    {
        public int Id { get; set; }
        [StringLength(20)]

        public string Cpf { get; set; } = string.Empty;

        public string Nome { get; set; } = string.Empty;

        public string Nascimento { get; set; } = string.Empty;

        public string sexo { get; set; } = string.Empty;

        public string endereco { get; set; } = string.Empty;

        public string cidade { get; set; } = string.Empty;

        public string estado { get; set; } = string.Empty;

        public int ClienteTipoId { get; set; }

        public ClienteTipo? ClienteTipo { get; set; }
    }
}
