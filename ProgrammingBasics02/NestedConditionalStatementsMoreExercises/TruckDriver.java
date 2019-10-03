package com.company.NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class TruckDriver {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String season = scanner.nextLine();
        double kilometersPerMonth = Double.parseDouble(scanner.nextLine());

        //км на месец <= 5000
        //5000 < км на месец <= 10000
        //10000 < км на месец <= 20000
        double pricePerKilometers = 0;
        if (kilometersPerMonth <= 5000) {
            if (season.equalsIgnoreCase("spring") || season.equalsIgnoreCase("autumn")) {
                pricePerKilometers = 0.75;
            } else if (season.equalsIgnoreCase("summer")) {
                pricePerKilometers = 0.90;
            } else if (season.equalsIgnoreCase("winter")) {
                pricePerKilometers = 1.05;
            }
        } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
            if (season.equalsIgnoreCase("spring") || season.equalsIgnoreCase("autumn")) {
                pricePerKilometers = 0.95;
            } else if (season.equalsIgnoreCase("summer")) {
                pricePerKilometers = 1.10;
            } else if (season.equalsIgnoreCase("winter")) {
                pricePerKilometers = 1.25;
            }
        } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
            pricePerKilometers = 1.45;
        }

        double total = kilometersPerMonth * 4;
        total *= pricePerKilometers;
        total *= 0.90;
        System.out.printf("%.2f", total);

    }
}
