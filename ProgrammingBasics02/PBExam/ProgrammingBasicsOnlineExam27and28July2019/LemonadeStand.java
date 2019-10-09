package PBExam.ProgrammingBasicsOnlineExam27and28July2019;

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

        double cups = 0;
        double money = 0;

        double juice = lemons * 980;
        double total = juice + water * 1000 + (0.30 * sugar);
        cups = Math.floor(total / 150.0);
        money = cups * 1.20;

        System.out.printf("All cups sold: %.0f", cups);
        System.out.printf("Money earned: %.2f", money);
    }
}
