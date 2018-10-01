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
            var max = int.MinValue;

            foreach (var value in array)
            {
                if (max < value)
                {
                    max = value;
                }
            }

            return max;
        }
    }
}  
