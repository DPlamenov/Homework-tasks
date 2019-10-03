package NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();
        //for output
        String location = "";
        String place = "";
        double price = 0;

        if (budget <= 1000) {
            if (season.equalsIgnoreCase("summer")) {
                location = "Alaska";
                price = 0.65 * budget;
            } else {
                location = "Morocco";
                price = 0.45 * budget;
            }
            place = "Camp";
        } else if (budget > 1000 && budget <= 3000) {
            if (season.equalsIgnoreCase("summer")) {
                location = "Alaska";
                price = 0.80 * budget;
            } else {
                location = "Morocco";
                price = 0.60 * budget;
            }
            place = "Hut";
        } else if (budget > 3000) {
            if (season.equalsIgnoreCase("summer")) {
                location = "Alaska";
            } else {
                location = "Morocco";
            }
            place = "Hotel";
            price = 0.90 * budget;
        }

        System.out.printf("%s - %s - %.2f", location, place, price);
    }
}
