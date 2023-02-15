﻿using Microsoft.EntityFrameworkCore;

namespace upd8Api.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<ClienteTipo> ClienteTipos { get; set; }

        public DbSet<Status> Statuses { get; set; }
    }
}
