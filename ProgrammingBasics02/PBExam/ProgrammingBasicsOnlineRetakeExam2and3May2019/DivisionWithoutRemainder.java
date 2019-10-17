package PBExam.ProgrammingBasicsOnlineRetakeExam2and3May2019;

import java.util.Scanner;

public class DivisionWithoutRemainder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double p1 = 0;
        double p2 = 0;
        double p3 = 0;
        for (int i = 1; i <= n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if (currentNumber % 2 == 0) {
                p1++;
            }
            if (currentNumber % 3 == 0) {
                p2++;
            }
            if (currentNumber % 4 == 0) {
                p3++;
            }
        }
        System.out.println(String.format("%.2f%%", p1 / n * 100));
        System.out.println(String.format("%.2f%%", p2 / n * 100));
        System.out.println(String.format("%.2f%%", p3 / n * 100));
    }
}
