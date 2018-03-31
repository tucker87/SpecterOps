using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public static class DataLayer
{
    public async static Task<List<string>> GetWows(int? length = null)
    {
        return await Task.Run(() => {
            var wows = new List<string>{"Wow", "wow", "!woW"};
            return length != null 
                ? wows.Take(length.Value).ToList()
                : wows;
        });
    }
}