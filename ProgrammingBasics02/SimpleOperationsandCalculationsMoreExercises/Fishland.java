package com.company.SimpleOperationsandCalculationsMoreExercises;

import java.util.Scanner;

public class Fishland {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double mackerelPrice = Double.parseDouble(scanner.nextLine());
        double spinePrice = Double.parseDouble(scanner.nextLine());
        double chamoisKilograms = Double.parseDouble(scanner.nextLine());
        double horseMackerelKilograms = Double.parseDouble(scanner.nextLine());
        int musselsKilograms = Integer.parseInt(scanner.nextLine());

        double chamoisPrice = 1.60 * mackerelPrice;
        double horseMackerelPrice = 1.80 * spinePrice;
        double musselsPrice = 7.50;

        double chamois = chamoisKilograms * chamoisPrice;
        double horseMackerel = horseMackerelKilograms * horseMackerelPrice;
        double mussels = musselsKilograms * musselsPrice;

        double total = chamois + horseMackerel + mussels;

        System.out.println(String.format("%.2f", total));



    }
}
