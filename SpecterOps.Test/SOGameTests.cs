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

        [Fact]
        public void Players_Have_Default_Names()
        {
            var game = new SOGame(2);
            Assert.Equal("Player1", game.Players[0].Name);
            Assert.Equal("Player2", game.Players[1].Name);
        }

        
    }
}