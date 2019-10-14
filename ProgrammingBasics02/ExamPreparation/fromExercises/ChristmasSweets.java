package ExamPreparation.fromExercises;

import java.util.Scanner;

public class ChristmasSweets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double baklava_price = Double.parseDouble(scanner.nextLine());
        double mufini_price = Double.parseDouble(scanner.nextLine());
        double sholen = Double.parseDouble(scanner.nextLine());
        double bonboni = Double.parseDouble(scanner.nextLine());
        double biskviti = Double.parseDouble(scanner.nextLine());

        double sholen_price = 1.60 * baklava_price;
        double bonboni_price = 1.80 * mufini_price;
        double biskviti_price = 7.50;

        double total = (sholen * sholen_price) + (bonboni * bonboni_price) + (biskviti * biskviti_price);
        System.out.printf("%.2f", total);

    }
}
