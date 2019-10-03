package com.company.ConditionalStatementsLab;

import java.util.Scanner;

public class ToyShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double puzzlePrice = 2.60;
        double talkingDollPrice = 3.00;
        double teddyBearPrice = 4.10;
        double mignonPrice = 8.20;
        double truckPrice = 2.00;

        double excursion_price = Double.parseDouble(scanner.nextLine());

        int puzzleQuantity = Integer.parseInt(scanner.nextLine());
        int talkingDollQuantity = Integer.parseInt(scanner.nextLine());
        int teddyBearQuantity = Integer.parseInt(scanner.nextLine());
        int mignonQuantity = Integer.parseInt(scanner.nextLine());
        int truckQuantity = Integer.parseInt(scanner.nextLine());

        double puzzleTotal = puzzlePrice * puzzleQuantity;
        double talkingDollTotal = talkingDollPrice * talkingDollQuantity;
        double teddyBearTotal = teddyBearPrice * teddyBearQuantity;
        double mignonTotal = mignonPrice * mignonQuantity;
        double truckTotal = truckPrice * truckQuantity;

        double total = puzzleTotal + talkingDollTotal + teddyBearTotal + mignonTotal + truckTotal;
        int total_count = puzzleQuantity + talkingDollQuantity + teddyBearQuantity + mignonQuantity + truckQuantity;
        if (total_count >= 50) {
            double discount = total * 0.25;
            total -= discount;
        }
        double rent = 0.10 * total;
        total -= rent;
        if (total >= excursion_price) {
            System.out.printf("Yes! %.2f lv left.", total - excursion_price);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.",Math.abs(excursion_price - total));
        }

    }
}
