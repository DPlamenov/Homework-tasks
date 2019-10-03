package com.company.ConditionalStatementsExercise;

import java.util.Scanner;

public class SumSeconds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int firstSeconds = Integer.parseInt(scanner.nextLine());
        int secondSeconds = Integer.parseInt(scanner.nextLine());
        int thirdSeconds = Integer.parseInt(scanner.nextLine());

        int totalSeconds = firstSeconds + secondSeconds + thirdSeconds;
        int seconds = totalSeconds % 60;
        int minutes = totalSeconds / 60;

        if (seconds < 10) {
            System.out.printf("%d:0%d", minutes, seconds);
        } else {
            System.out.printf("%d:%d", minutes, seconds);
        }
    }
}
