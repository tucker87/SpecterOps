using System;
using Xunit;
using SpecterOps.Game;
using System.Linq;

namespace SpecterOps.Test
{
    public class SOGameTests
    {
        [Fact]
        public void Can_Be_Made()
        {
            var game = new SOGame(0);
        }

        [Fact]
        public void Fills_With_Players()
        {
            var game = new SOGame(3);
            Assert.Equal(3, game.Players.Count);
        }
    }
}