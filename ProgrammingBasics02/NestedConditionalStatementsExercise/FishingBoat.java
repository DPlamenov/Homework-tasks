package NestedConditionalStatementsExercise;

import java.util.Scanner;

public class FishingBoat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int budget = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        int fishMan = Integer.parseInt(scanner.nextLine());

        double total = 0;
        //•	Цената за наем на кораба през пролетта е  3000 лв.
        //•	Цената за наем на кораба през лятото и есента е  4200 лв.
        //•	Цената за наем на кораба през зимата е  2600 лв.

        if (season.equalsIgnoreCase("Summer") || season.equalsIgnoreCase("Autumn")) {
            total = 4200;
        } else if (season.equalsIgnoreCase("Spring")) {
            total = 3000;
        } else if (season.equalsIgnoreCase("Winter")) {
            total = 2600;
        }

        //•	Ако групата е до 6 човека включително  –  отстъпка от 10%.
        //•	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
        //•	Ако групата е от 12 нагоре  –  отстъпка от 25%.

        double discount = 0;
        if (fishMan <= 6) {
            discount = 0.10 * total;
        } else if (fishMan <= 11) {
            discount = 0.15 * total;
        } else {
            discount = 0.25 * total;
        }
        total -= discount;

        if (fishMan % 2 == 0 && !season.equalsIgnoreCase("Autumn")) {
            total *= 0.95;
        }
        if (budget >= total) {
            System.out.printf("Yes! You have %.2f leva left.", budget - total);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", Math.abs(budget - total));
        }
    }
}
