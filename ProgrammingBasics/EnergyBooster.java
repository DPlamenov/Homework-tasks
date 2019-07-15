package com.company;

import java.util.Scanner;

public class EnergyBooster {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fruit = scanner.nextLine();
        String size = scanner.nextLine();
        int sets_count = Integer.parseInt(scanner.nextLine());

        double total = 0;
        switch (fruit) {
            case "Watermelon":
                if (size.equals("small")) {
                    total += sets_count * 56.00 * 2;
                } else if (size.equals("big")) {
                    total += sets_count * 28.70 * 5;
                }
                break;
            case "Mango":
                if (size.equals("small")) {
                    total += sets_count * 36.66 * 2;
                } else if (size.equals("big")) {
                    total += sets_count * 19.60 * 5;
                }
                break;
            case "Pineapple":
                if (size.equals("small")) {
                    total += sets_count * 42.10 * 2;
                } else if (size.equals("big")) {
                    total += sets_count * 24.80 * 5;
                }
                break;
            case "Raspberry":
                if (size.equals("small")) {
                    total += sets_count * 20.00 * 2;
                } else if (size.equals("big")) {
                    total += sets_count * 15.20 * 5;
                }
                break;
        }
        if (total >= 400 && total <= 1000) {
            double discount = total * 0.15;
            total -= discount;
        }else if(total > 1000){
            double discount = total * 0.5;
            total -= discount;
        }
        System.out.printf("%.2f lv.", total);

    }
}
