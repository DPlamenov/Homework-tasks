package com.company.NestedConditionalStatementsMoreExercises;

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

        //•	При бюджет по-малък или равен от 1000лв.:
        //o	Настаняване в "Camp"
        //o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
        //	Лято – Аляска – 65% от бюджета
        //	Зима – Мароко – 45% от бюджета
        //•	При бюджет по-голям от 1000лв. и по-малък или равен от 3000лв.:
        //o	Настаняване в "Hut"
        //o	Според сезона локацията ще е една от следните и ще струва определен процент от бюджета:
        //	Лято – Аляска – 80% от бюджета
        //	Зима – Мароко – 60% от бюджета
        //•	При бюджет по-голям от 3000лв.:
        //o	Настаняване в "Hotel"
        //o	Според сезона локацията ще е една от следните и ще струва 90% от бюджета:
        //	Лято – Аляска
        //	Зима – Мароко
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
