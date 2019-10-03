package com.company.NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class MatchTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String category = scanner.nextLine();
        int people = Integer.parseInt(scanner.nextLine());

        double total = 0;
        if (category.equalsIgnoreCase("vip")) {
            total = people * 499.99;
        } else if (category.equalsIgnoreCase("normal")) {
            total = people * 249.99;
        }
        //•	От 1 до 4 – 75% от бюджета.
        //•	От 5 до 9 – 60% от бюджета.
        //•	От 10 до 24 – 50% от бюджета.
        //•	От 25 до 49 – 40% от бюджета.
        //•	50 или повече – 25% от бюджета.
        if (people <= 4) {
            total += 0.75 * budget;
        } else if (people <= 9) {
            total += 0.60 * budget;
        } else if (people <= 24) {
            total += 0.50 * budget;
        } else if (people <= 49) {
            total += 0.40 * budget;
        }else{
            total += 0.25 * budget;
        }

        if(budget >= total){
            System.out.printf("Yes! You have %.2f leva left.", budget - total);
        }else{
            System.out.printf("Not enough money! You need %.2f leva.", Math.abs(budget - total));
        }
    }
}
