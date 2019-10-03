package com.company.ConditionalStatementsExercise;

import java.util.Scanner;

public class Time15Minutes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hours = scanner.nextInt();
        int minutes = scanner.nextInt();

        minutes += 15;
        if (minutes > 59) {
            minutes -= 60;
            hours++;
        }
        if(hours == 24){
            hours = 0;
        }
        if (minutes < 10) {
            System.out.printf("%d:0%d", hours, minutes);
        } else {
            System.out.printf("%d:%d", hours, minutes);
        }
    }
}
