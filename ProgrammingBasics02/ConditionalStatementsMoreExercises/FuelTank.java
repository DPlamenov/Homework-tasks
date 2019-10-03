package com.company.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class FuelTank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fuelType = scanner.nextLine();
        int leftFuel = Integer.parseInt(scanner.nextLine());

        if (fuelType.equalsIgnoreCase("diesel")
                || fuelType.equalsIgnoreCase("gasoline")
                || fuelType.equalsIgnoreCase("gas")) {
            if (leftFuel >= 25) {
                System.out.printf("You have enough %s.", fuelType.toLowerCase());
            } else {
                System.out.printf("Fill your tank with %s!", fuelType.toLowerCase());
            }
        } else {
            System.out.println("Invalid fuel!");
        }

    }
}
