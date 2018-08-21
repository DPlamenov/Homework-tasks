using System;
using System.Text;

namespace CSharp
{
    class Program
    {
        static void Main()
        {
            var a = int.Parse(Console.ReadLine());
            var b = int.Parse(Console.ReadLine());
            var sum = a + b;
            var result = $"{a} + {b} = {sum}";
            Console.WriteLine(result);
        }
    }
}
