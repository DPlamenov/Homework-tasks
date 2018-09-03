using System;
using System.Linq;

public class Program
{
    static void Main()
    {
        var sum = 0;
        var nums = new int[int.Parse(Console.ReadLine())];
        for (int i = 0; i < nums.Length; i++)
        {
            nums[i] = int.Parse(Console.ReadLine());            
        }
        
        Console.WriteLine($"Sum: {nums.Sum()}");
    }

}


