using System;
using System.Linq;

namespace CSharpPlayground
{
    public class Program
    {
        static void Main()
        {

            var first = int.Parse(Console.ReadLine());
            var second = int.Parse(Console.ReadLine());
            var third = int.Parse(Console.ReadLine());
            var fourth = int.Parse(Console.ReadLine());
      
            var result = ((first + second) / third) * fourth;
        
            Console.WriteLine(result);

        }
    }

}


