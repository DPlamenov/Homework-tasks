package com.company;

import java.util.Scanner;

public class PoolDay {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int people = scanner.nextInt();
        double tax = scanner.nextDouble();
        double lounge_chair = scanner.nextDouble();
        double umbrella = scanner.nextDouble();

        double total = people * tax;
        total += (umbrella * (Math.ceil(people / 2.0)));
        total += (lounge_chair * (Math.ceil(people *0.75)));
        System.out.printf("%.2f lv.", total);
    }
}
