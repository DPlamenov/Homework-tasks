package com.company.SimpleOperationsandCalculationsMoreExercises;

        import java.util.Scanner;

public class VegetableMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double vegatablePrice = Double.parseDouble(scanner.nextLine());
        double fruitPrice = Double.parseDouble(scanner.nextLine());
        int kilogramsVegatable = Integer.parseInt(scanner.nextLine());
        int kilogramsFruit = Integer.parseInt(scanner.nextLine());

        double vegatable = vegatablePrice * kilogramsVegatable;
        double fruit = fruitPrice * kilogramsFruit;

        double totalBGN = vegatable + fruit;
        double totalEUR = totalBGN / 1.94;
        System.out.printf("%.2f", totalEUR);

    }
}
