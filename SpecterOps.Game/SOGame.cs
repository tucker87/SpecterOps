using System;
using System.Collections.Generic;
using System.Linq;

namespace SpecterOps.Game
{
    public class SOGame
    {
        public SOGame(int players)
        {
            Players = Enumerable.Range(1, players).Select(i => new Player(i)).ToList();
        }
        public Board Board { get; set; } = new Board(23, 32);
        public List<Player> Players { get; private set; }
    }
}
