package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class SummerShopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //На първия ред бюджетът на Ани – цяло число в интервала [1...1000]
        //2. На втория ред цената на плажната хавлия – реално число в интервала [1.00... 300.00]
        //3. На третия ред процентната отстъпка – цяло число в интервала [1...99]
        int budget = Integer.parseInt(scanner.nextLine());
        double bathrobePrice = Double.parseDouble(scanner.nextLine());
        int discount = Integer.parseInt(scanner.nextLine());

        double umbrella = (2.0 / 3) * bathrobePrice;
        double flipFlops = 0.75 * umbrella;
        double bag = (1.0 / 3) * (flipFlops + bathrobePrice);
        double total = bathrobePrice + umbrella + flipFlops + bag;

        double disc = 1.00 - discount / 100.0;
        total *= disc;
        if (budget >= total) {
            System.out.printf("Annie's sum is %.2f lv. She has %.2f lv. left.", total, budget - total);
        } else {
            System.out.printf("Annie's sum is %.2f lv. She needs %.2f lv. more.", total, Math.abs(budget - total));
        }
    }
}
