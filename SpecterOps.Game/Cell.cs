public class Cell
{
    public Cell(int c, int r)
    {
        Name = $"{(char)(c+64)}{r}";
    }
    public string Name { get; set; }
    public State State { get; set; }
}