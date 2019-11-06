package SampleExam;

import java.util.Scanner;

public class Exercise1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Парите за храна за един ден - реално число в интервала (0.00…1500.00]
        //• Парите за сувенири за един ден - реално число в интервала (0.00…1500.00]
        //• Парите за хотел за един ден - реално число в интервала [100.00…5000.00]
        double priceForFood = Double.parseDouble(scanner.nextLine());
        double priceForSouvenirs = Double.parseDouble(scanner.nextLine());
        double priceForHotelPerDay = Double.parseDouble(scanner.nextLine());

        double total = 0;
        double gasolinePrice = 420.0 / 100 * 7;
        gasolinePrice *= 1.85;

        double d1 = priceForHotelPerDay * 0.90;
        double d2 = priceForHotelPerDay * 0.85;
        double d3 = priceForHotelPerDay * 0.80;

        total += (3 * priceForFood) + (3 * priceForSouvenirs);
        total += gasolinePrice;
        total += d1 + d2 + d3;
        System.out.printf("Money needed: %.2f", total);
    }
}
