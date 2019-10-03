package ExamPreparation;

import java.util.Scanner;

public class LemonadeStand {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Първи ред – килограмите лимони. Реално число в интервала [1.00…1000.00]
        //• Втори ред – килограмите захар. Реално число в интервала [1.00…100.00]
        //• Трети ред – литрите вода. Реално число в интервала [1.00…1000.00]
        double lemons = Double.parseDouble(scanner.nextLine());
        double sugar = Double.parseDouble(scanner.nextLine());
        double water = Double.parseDouble(scanner.nextLine());

        double juice = lemons * 980;
        juice += water * 1000;
        juice += 0.30 * sugar;

        double cups = Math.floor(juice / 150.0);

        System.out.printf("All cups sold: %.0f%n", cups);
        System.out.printf("Money earned: %.2f", cups * 1.20);
    }
}
