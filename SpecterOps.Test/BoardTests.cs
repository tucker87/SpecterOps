using SpecterOps.Game;
using Xunit;

public class BoardTests
{
        [Fact]
        public void Board_Size_Are_Set()
        {
            var game = new SOGame(2);
            Assert.Equal(23, game.Board.Width);
            Assert.Equal(32, game.Board.Height);
        }

        [Fact]
        public void First_Cell_Is_A1()
        {
            var game = new SOGame(2);
            var cell = game.Board.Cells[0][0];
            Assert.Equal("A1", cell.Name);
        }

        [Fact]
        public void Board_Cell_States_Are_Set()
        {
            var game = new SOGame(2);
            Assert.Equal(State.Empty, game.Board.Cells[0][0].State);
            game.Board.Cells[0][0].State = State.Hacker;
            Assert.Equal(State.Hacker, game.Board.Cells[0][0].State);
        }

        [Fact]
        public void Can_Get_Cell_By_Name()
        {
            var game = new SOGame(2);
            game.Board.Cells[3][3].State = State.Hacker;
            var cell = game.Board.GetCell("D4");
            Assert.Equal(State.Hacker, cell.State);
        }

        [Fact]
        public void Can_Get_The_Hacker_Cell()
        {
            var game = new SOGame(2);
            game.Board.Cells[13][7].State = State.Hacker;
            var cell = game.Board.GetHackerCell();
            Assert.Equal(State.Hacker, cell.State);
            Assert.Equal("N8", cell.Name);
        }
}