package com.company.NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class CarToGo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String season = scanner.nextLine();

        String typeClass = "";
        String car = "";
        double price = 0;

        if (budget <= 100) {
            typeClass = "Economy class";
            if(season.equalsIgnoreCase("winter")){
                car = "Jeep";
                price = 0.65 * budget;
            }else if(season.equalsIgnoreCase("summer")){
                car = "Cabrio";
                price = 0.35 * budget;
            }
        } else if (budget > 100 && budget <= 500) {
            typeClass = "Compact class";
            if(season.equalsIgnoreCase("winter")){
                car = "Jeep";
                price = 0.80 * budget;
            }else if(season.equalsIgnoreCase("summer")){
                car = "Cabrio";
                price = 0.45 * budget;
            }
        } else if (budget > 500) {
            typeClass = "Luxury class";
            car = "Jeep";
            price = 0.90 * budget;
        }

        //•	При бюджет по-малък или равен от 100лв.:
        //o	Класът ще е - "Economy class"
        //o	Според сезона колата и цената ще са:
        //	Лято – Кабрио – 35% от бюджета
        //	Зима – Джип – 65% от бюджета

        //•	При бюджет по-голям от 100лв. и по-малък или равен от 500лв.:
        //o	Класът ще е - "Compact class"
        //o	Според сезона колата и цената ще са:
        //	Лято – Кабрио – 45% от бюджета
        //	Зима – Джип – 80% от бюджета

        //•	При бюджет по-голям от 500лв.:
        //o	Класът ще е – "Luxury class"
        //o	За всеки сезон колата ще е джип и цената ще е:
        //	90% от бюджета
        System.out.println(typeClass);
        System.out.printf("%s - %.2f", car, price);
    }
}
