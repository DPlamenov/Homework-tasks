package com.company.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class PipesInPool {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int v = Integer.parseInt(scanner.nextLine());
        int p1 = Integer.parseInt(scanner.nextLine());
        int p2 = Integer.parseInt(scanner.nextLine());
        double h = Double.parseDouble(scanner.nextLine());

        double p1_ = p1 * h;
        double p2_ = p2 * h;

        double total = p1_ + p2_;
        if (v >= total) {

            double _percent = total / v * 100;
            double percent_p1 = p1_ / total * 100;
            double percent_p2 = 100.0 - percent_p1;
            System.out.printf("The pool is %.2f%% full. Pipe 1: %.2f%%. Pipe 2: %.2f%%.", _percent, percent_p1, percent_p2);
        } else {
            System.out.printf("For %.2f hours the pool overflows with %.2f liters.", h, total - v);
        }

    }
}
