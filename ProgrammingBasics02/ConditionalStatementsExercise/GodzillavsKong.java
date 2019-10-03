package ConditionalStatementsExercise;

import java.util.Scanner;

public class GodzillavsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int extras = Integer.parseInt(scanner.nextLine());
        double dressPricePerExtra = Double.parseDouble(scanner.nextLine());

        double decor = 0.10 * budget;
        double clothing = extras * dressPricePerExtra;

        if (extras > 150) {
            clothing = clothing * 0.90;
        }

        double total = decor + clothing;

        if (budget >= total) {
            System.out.println("Action!");
            System.out.println(String.format("Wingard starts filming with %.2f leva left.", budget - total));
        } else {
            System.out.println("Not enough money!");
            System.out.println(String.format("Wingard needs %.2f leva more.", Math.abs(budget - total)));
        }
    }
}
