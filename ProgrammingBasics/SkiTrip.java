package com.company;

import java.util.Scanner;

public class SkiTrip{

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        String type_room = scanner.nextLine();
        String grade = scanner.nextLine();

        double total = 0;
        int nights = days - 1;
        double price = 0;
        switch (type_room) {
            case "room for one person":
                price = nights * 18.00;
                break;
            case "apartment":
                if (days < 10) {
                    price = nights * 25.00;
                    double percent = price * 0.3;
                    price -= percent;
                } else if (days >= 10 && days <= 15) {
                    price = nights * 25.00;
                    double percent = price * 0.35;
                    price -= percent;
                } else if (days > 15) {
                    price = nights * 25.00;
                    double percent = price * 0.50;
                    price -= percent;
                }
                break;
            case "president apartment":
                if (days < 10) {
                    price = nights * 35.00;
                    double percent = price * 0.1;
                    price -= percent;
                } else if (days >= 10 && days <= 15) {
                    price = nights * 35.00;
                    double percent = price * 0.15;
                    price -= percent;
                } else if (days > 15) {
                    price = nights * 35.00;
                    double percent = price * 0.20;
                    price -= percent;
                }

                break;
        }

        if (grade.equals("positive")) {
            double percent = price * 0.25;
            price += percent;
        } else {
            double percent = price * 0.10;
            price -= percent;
        }

        System.out.printf("%.2f", price);
    }
}
