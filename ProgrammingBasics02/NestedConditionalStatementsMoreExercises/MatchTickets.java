package NestedConditionalStatementsMoreExercises;

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
