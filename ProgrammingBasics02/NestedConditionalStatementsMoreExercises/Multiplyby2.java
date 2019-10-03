package com.company.NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Multiplyby2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true){
            double n = Double.parseDouble(scanner.nextLine());
            if (n < 0) {
                System.out.println("Negative number!");
                break;
            }
            System.out.printf("Result: %.2f%n", n * 2);
        }
    }
}
