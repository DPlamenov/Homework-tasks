package com.company.NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class BikeRace {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int junior = Integer.parseInt(scanner.nextLine());
        int senior = Integer.parseInt(scanner.nextLine());
        String track = scanner.nextLine();

        //trail	cross-country	downhill	road
        double total = 0;

        double priceForJunior = 0;
        double priceForSenior = 0;
        switch (track) {
            case "trail":
                priceForJunior = 5.50;
                priceForSenior = 7.00;
                break;
            case "cross-country":
                priceForJunior = 8.00;
                priceForSenior = 9.50;
                break;
            case "downhill":
                priceForJunior = 12.25;
                priceForSenior = 13.75;
                break;
            case "road":
                priceForJunior = 20.00;
                priceForSenior = 21.50;
                break;
        }

        total = priceForJunior * junior + priceForSenior * senior;

        if(track.equalsIgnoreCase("cross-country") && junior + senior >= 50){
            total *= 0.75;
        }

        total *= 0.95;
        System.out.printf("%.2f", total);

    }
}
