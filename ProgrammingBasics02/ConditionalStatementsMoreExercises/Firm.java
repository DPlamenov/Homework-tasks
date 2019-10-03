package com.company.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Firm {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int need_hours = Integer.parseInt(scanner.nextLine());
        int freeDays = Integer.parseInt(scanner.nextLine());
        int workers = Integer.parseInt(scanner.nextLine());

        double hours = (0.9 * freeDays) * 8; //if this is above than need_hours project is success.
        hours += (workers * (2 * freeDays));

        hours = Math.floor(hours);
        if (hours >= need_hours) {
            System.out.printf("Yes!%.0f hours left.", hours - need_hours);
        } else {
            System.out.printf("Not enough time!%.0f hours needed.", Math.abs(hours - need_hours));
        }
    }
}
