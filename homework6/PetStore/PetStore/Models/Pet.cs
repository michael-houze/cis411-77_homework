using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Drawing;
using System.Linq;
using System.Web;

namespace PetStore.Models
{
    public class Pet
    {
        public int ID { get; set; }
        public byte[] Picture { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateReceived { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }

    public class PetDBContext : DbContext
    {
        public DbSet<Pet> Pets { get; set; }
    }
}