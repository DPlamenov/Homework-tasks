package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class CoffeeMachine {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String typeCoffee = scanner.nextLine();
        String sugar = scanner.nextLine();
        int drinks = Integer.parseInt(scanner.nextLine());
        double total = 0;
        switch (typeCoffee) {
            case "Espresso":
                if (sugar.equals("Without")) {
                    total = 0.90 * drinks;
                } else if (sugar.equals("Normal")) {
                    total = 1.00 * drinks;
                } else if (sugar.equals("Extra")) {
                    total = 1.20 * drinks;
                }
                break;
            case "Cappuccino":
                if (sugar.equals("Without")) {
                    total = 1.00 * drinks;
                } else if (sugar.equals("Normal")) {
                    total = 1.20 * drinks;
                } else if (sugar.equals("Extra")) {
                    total = 1.60 * drinks;
                }
                break;
            case "Tea":
                if (sugar.equals("Without")) {
                    total = 0.50 * drinks;
                } else if (sugar.equals("Normal")) {
                    total = 0.60 * drinks;
                } else if (sugar.equals("Extra")) {
                    total = 0.70 * drinks;
                }
                break;
        }
        if (sugar.equals("Without")) {
            total *= 0.65;
        }
        if (typeCoffee.equals("Espresso") && drinks >= 5) {
            total *= 0.75;
        }
        if (total > 15.00) {
            total *= 0.80;
        }
        System.out.printf("You bought %d cups of %s for %.2f lv.", drinks, typeCoffee, total);
    }
}
