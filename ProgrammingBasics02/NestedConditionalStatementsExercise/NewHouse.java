package NestedConditionalStatementsExercise;

import java.util.Scanner;

public class NewHouse {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
        //•	Брой цветя - цяло число в интервала [10…1000]
        //•	Бюджет - цяло число в интервала [50…2500]

        String flower = scanner.nextLine();
        int flowerCount = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());
        //5	3.80	2.80	3	2.50
        double total = 0.0;
        switch (flower) {
            case "Roses":
                total = 5.00 * flowerCount;
                break;
            case "Dahlias":
                total = 3.80 * flowerCount;
                break;
            case "Tulips":
                total = 2.80 * flowerCount;
                break;
            case "Narcissus":
                total = 3.00 * flowerCount;
                break;
            case "Gladiolus":
                total = 2.50 * flowerCount;
                break;
        }
        //•	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
        //•	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
        //•	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
        //•	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
        //•	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%

        double discount = 0;
        double add = 0;
        if (flower.equalsIgnoreCase("roses") && flowerCount > 80) {
            discount = 0.10 * total;
        } else if (flower.equalsIgnoreCase("dahlias") && flowerCount > 90) {
            discount = 0.15 * total;
        } else if (flower.equalsIgnoreCase("tulips") && flowerCount > 80) {
            discount = 0.15 * total;
        } else if (flower.equalsIgnoreCase("narcissus") && flowerCount < 120) {
            add = 0.15 * total;
        } else if (flower.equalsIgnoreCase("gladiolus") && flowerCount < 80) {
            add = 0.20 * total;
        }
        total -= discount;
        total += add;

        if (budget >= total) {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", flowerCount, flower, budget - total);
        } else {
            System.out.printf("Not enough money, you need %.2f leva more.", Math.abs(budget - total));
        }

    }
}
