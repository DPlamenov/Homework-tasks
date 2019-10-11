package NestedLoopsExercise;

import java.util.Scanner;
import java.util.logging.Level;

public class EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n1 = Integer.parseInt(scanner.nextLine());
        int n2 = Integer.parseInt(scanner.nextLine());
        for (int i = n1; i <= n2; i++) {
            int oddSum = 0;
            int Even = 0;
            for (int j = 1; j <= 6; j++) {
                char x = String.valueOf(i).charAt(j - 1);
                String x2 = String.valueOf(x);
                if(j %2 ==0){
                    Even += Integer.parseInt(x2);
                }else {
                    oddSum += Integer.parseInt(x2);
                }
            }
            if(oddSum == Even){
                System.out.print(i + " ");
            }
        }
    }
}
