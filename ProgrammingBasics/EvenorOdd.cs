using System;

namespace Homework
{
    class ExcellentOrNot
    {
        static void Main(string[] args)
        {
            var num = double.Parse(Console.ReadLine());
		    if(num %2 == 0){
				Console.WriteLine("Even");  
			}else{
				Console.WriteLine("Odd");
		    }
        }
    }
}