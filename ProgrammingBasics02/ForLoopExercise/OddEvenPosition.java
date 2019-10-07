package ForLoopExercise;

import java.util.Scanner;

public class OddEvenPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double OddSum = 0;

        double OddMin = Integer.MAX_VALUE;
        double OddMax = Integer.MIN_VALUE;

        double EvenSum = 0;

        double EvenMin = Integer.MAX_VALUE;
        double EvenMax = Integer.MIN_VALUE;
        for (int i = 1; i <= n; i++) {
            double currentNumber = Double.parseDouble(scanner.nextLine());
            if (i % 2 == 0) {
                EvenSum += currentNumber;
                if(currentNumber > EvenMax){
                    EvenMax = currentNumber;
                }
                if(currentNumber < EvenMin){
                    EvenMin = currentNumber;
                }
            } else {
                OddSum += currentNumber;
                if(currentNumber > OddMax){
                    OddMax = currentNumber;
                }
                if(currentNumber < OddMin){
                    OddMin = currentNumber;
                }
            }
        }
        System.out.printf("OddSum=%.2f,%n", OddSum);
        if(OddMin != Integer.MAX_VALUE){
            System.out.printf("OddMin=%.2f,%n", OddMin);
        }else{
            System.out.println("OddMin=No,");
        }
        if(OddMax != Integer.MIN_VALUE){
            System.out.printf("OddMax=%.2f,%n", OddMax);
        }else{
            System.out.println("OddMax=No,");
        }
        System.out.printf("EvenSum=%.2f,%n", EvenSum);
        if(EvenMin != Integer.MAX_VALUE){
            System.out.printf("EvenMin=%.2f,%n", EvenMin);
        }else{
            System.out.println("EvenMin=No,");
        }
        if(EvenMax != Integer.MIN_VALUE){
            System.out.printf("EvenMax=%.2f%n", EvenMax);
        }else{
            System.out.println("EvenMax=No");
        }
    }
}
