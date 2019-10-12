package NestedLoopsExercise;

import java.util.Scanner;

public class SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;
        int sumOfNonPrime = 0;
        int sumOfPrime = 0;
        while (!"stop".equals(command = scanner.nextLine())) {
            int num = Integer.parseInt(command);
            boolean flag = false;
            if(num < 0){
                System.out.println("Number is negative.");
                continue;
            }
            for (int i = 2; i <= num / 2; ++i) {
                // condition for nonprime number
                if (num % i == 0) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                sumOfNonPrime += num;
            }else{
                sumOfPrime += num;
            }
        }
        System.out.printf("Sum of all prime numbers is: %d%n", sumOfPrime);
        System.out.printf("Sum of all non prime numbers is: %d", sumOfNonPrime);
    }
}
