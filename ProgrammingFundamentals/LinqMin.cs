using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Array
{
   class Array
    {
        public static int ArrayMin(int[] array)
        {
            var min = int.MaxValue;

            foreach (var value in array)
            {
                if (min > value)
                {
                    min = value;
                }
            }

            return min;
        }
    }
}        
