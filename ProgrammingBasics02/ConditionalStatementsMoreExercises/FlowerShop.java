package com.company.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class FlowerShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int magnoliasCount = Integer.parseInt(scanner.nextLine());
        int hyacinthsCount = Integer.parseInt(scanner.nextLine());
        int rosesCount = Integer.parseInt(scanner.nextLine());
        int cactusCount = Integer.parseInt(scanner.nextLine());
        double giftPrice = Double.parseDouble(scanner.nextLine());

        double magnoliasPrice = 3.25;
        double hyacinthsPrice = 4.00;
        double rosesPrice = 3.50;
        double cactusPrice = 8.00;

        double totalSold = (magnoliasCount * magnoliasPrice)
                + (hyacinthsCount * hyacinthsPrice)
                + (rosesCount * rosesPrice)
                + (cactusCount * cactusPrice);
        //5% taxes
        totalSold *= 0.95;
        //Output
        if (totalSold >= giftPrice) {
            System.out.printf("She is left with %.0f leva.", Math.floor(totalSold - giftPrice));
        } else {
            System.out.printf("She will have to borrow %.0f leva.", Math.ceil(Math.abs(totalSold - giftPrice)));
        }

    }
}