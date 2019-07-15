package com.company;

import java.util.Scanner;

public class FamilyTrip {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int nights = Integer.parseInt(scanner.nextLine());
        double price_per_night = Double.parseDouble(scanner.nextLine());
        int percent_additional = Integer.parseInt(scanner.nextLine());

        if(nights > 7){
            price_per_night = price_per_night - 0.05 * price_per_night;
        }
        double total = nights * price_per_night;
        System.out.println(total);
        total += budget * percent_additional / 100;

        if(budget >= total){
            System.out.printf("Ivanovi will be left with %.2f leva after vacation.", budget - total);
        }else{
            System.out.printf("%.2f leva needed.", Math.abs(total - budget));
        }
    }
}
