package NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Flowers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int chrysanthemums = Integer.parseInt(scanner.nextLine());
        int roses = Integer.parseInt(scanner.nextLine());
        int tulips = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        String isHoliday = scanner.nextLine();

        double total = 0;
        if (season.equalsIgnoreCase("Spring") || season.equalsIgnoreCase("Summer")) {
            total = (chrysanthemums * 2.00) + (roses * 4.10) + (tulips * 2.50);
        } else {
            total = (chrysanthemums * 3.75) + (roses * 4.50) + (tulips * 4.15);
        }

        if(isHoliday.equalsIgnoreCase("Y")){
            total *= 1.15;
        }

        if(tulips > 7 && season.equalsIgnoreCase("Spring")){
            total *= 0.95;
        }
        if(roses >= 10 && season.equalsIgnoreCase("Winter")){
            total *= 0.90;
        }
        if(chrysanthemums + roses + tulips > 20){
            total *= 0.80;
        }

        total += 2.00;

        System.out.printf("%.2f", total);
    }
}
