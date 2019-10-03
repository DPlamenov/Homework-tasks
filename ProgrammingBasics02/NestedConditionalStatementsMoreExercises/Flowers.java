package com.company.NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Flowers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	На първия ред е броят на закупените хризантеми – цяло число в интервала [0 ... 200]
        //•	На втория ред е броят на закупените рози – цяло число в интервала [0 ... 200]
        //•	На третия ред е броят на закупените лалета – цяло число в интервала [0 ... 200]
        //•	На четвъртия ред е посочен сезона – [Spring, Summer, Аutumn, Winter]
        //•	На петия ред е посочено дали денят е празник – [Y – да / N - не]
        int chrysanthemums = Integer.parseInt(scanner.nextLine());
        int roses = Integer.parseInt(scanner.nextLine());
        int tulips = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();
        String isHoliday = scanner.nextLine();

        //Сезон	            Хризантеми	    Рози	        Лалета
        //Пролет / Лято	    2.00 лв./бр.	4.10 лв./бр.	2.50 лв./бр.
        //Есен / Зима	    3.75 лв./бр.	4.50 лв./бр.	4.15 лв./бр.
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
