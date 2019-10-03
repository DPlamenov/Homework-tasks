package NestedConditionalStatementsExercise;

import java.util.Scanner;

public class Journey {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();
        // switch (season){
        //            case "summer":
        //               break;
        //            case "winter":
        //                break;
        //        }

        double total = 0;
        String destination = "";
        String holidayType = "";
        if (budget <= 100) {
            if (season.equalsIgnoreCase("summer")) {
                total = 0.30 * budget;
            } else if (season.equalsIgnoreCase("winter")) {
                total = 0.70 * budget;
            }
            destination = "Bulgaria";
        } else if (budget <= 1000) {
            if (season.equalsIgnoreCase("summer")) {
                total = 0.40 * budget;
            } else if (season.equalsIgnoreCase("winter")) {
                total = 0.80 * budget;
            }
            destination = "Balkans";
        } else if (budget > 1000) {
            total = 0.90 * budget;
            destination = "Europe";
        }

        if (season.equalsIgnoreCase("summer")) {
            holidayType = "Camp";
        } else if (season.equalsIgnoreCase("winter")) {
            holidayType = "Hotel";
        }
        if (destination.equalsIgnoreCase("europe")) {
            holidayType = "Hotel";
        }
        System.out.printf("Somewhere in %s%n", destination);
        System.out.printf("%s - %.2f", holidayType, total);
    }
}
