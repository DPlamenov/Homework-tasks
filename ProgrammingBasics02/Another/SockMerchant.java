package Another;

import java.io.*;
import java.util.*;
import java.lang.*;

public class SockMerchant {

    // Complete the sockMerchant function below.
    private static int sockMerchant(int n, int[] ar) {
        int x = 0;
        //List<Integer> integerList = new ArrayList<>();
        int[] myArr = new int[0b110011];
        //integerList.add(1, 12);

        for (int item : ar) {
            int nextValue = myArr[item] + 1;
            myArr[item] = nextValue;
        }
        for (int value : myArr) {
            if (value != 0) {
                x += value / 2;
            }
        }

        return x;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("1.txt"));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] ar = new int[n];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arItem = Integer.parseInt(arItems[i]);
            ar[i] = arItem;
        }

        int result = sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
