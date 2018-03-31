public class Player
{
    public Player(int id)
    {
        Id = id;
        Name = $"Player{id}";
    }

    public int Id { get; private set; }
    public string Name { get; set; }
}