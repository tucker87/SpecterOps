using System.Collections.Generic;
using System.Linq;

namespace SpecterOps.Game
{
    public class Board
    {
        public Board(int width, int height)
        {
            Width = width;
            Height = height;

            Cells = Enumerable.Range(1, width)
                .Select(c => Enumerable.Range(1, height).Select(r => new Cell(c, r)).ToList())
                .ToList();
        }

        public int Width { get; set; }
        public int Height { get; set; }
        public List<List<Cell>> Cells { get; set; }

        public Cell GetCell(string cellName) => Cells.SelectMany(c => c).First(c => c.Name == cellName);
        public Cell GetHackerCell() => Cells.SelectMany(c => c).First(c => c.State == State.Hacker);
    }
}