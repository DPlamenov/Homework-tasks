package pb.homework;

import java.util.Scanner;

public class Safari {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        double need_fuel = Double.parseDouble(scanner.nextLine());
        String day = scanner.nextLine();
        double discount = 0;
        double total = need_fuel * 2.10 + 100;
        if (day.equals("Saturday")) {
            discount = total * 0.10;
        } else {
            discount = total * 0.20;
        }
        total -= discount;

        if (budget >= total) {
            System.out.printf("Safari time! Money left: %.2f lv.", budget - total);
        } else {
            System.out.printf("Not enough money! Money needed: %.2f lv.", Math.abs(budget - total));
        }

    }
}
