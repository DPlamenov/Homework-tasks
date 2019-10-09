package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class PoolDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //1. Първи ред – брой на хората. Цяло число в интервала [1…100]
        //2. Втори ред – такса вход. Реално число в интервала [0.00…50.00]
        //3. Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
        //4. Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00]
        int people = Integer.parseInt(scanner.nextLine());
        double enterTax = Double.parseDouble(scanner.nextLine());
        double deckPrice = Double.parseDouble(scanner.nextLine());
        double umbrellaPrice = Double.parseDouble(scanner.nextLine());

        double total = 0;
        total += people * enterTax;
        total += Math.ceil(0.75 * people) * deckPrice;
        total += Math.ceil(0.5 * people) * umbrellaPrice;

        System.out.printf("%.2f lv.", total);

    }
}
