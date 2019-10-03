package ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class FuelTankPart2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	Типа на горивото – текст с възможности: "Gas", "Gasoline" или "Diesel"
        //•	Количество гориво – реално число в интервала [1.00 … 50.00]
        //•	Притежание на клубна карта – текст с възможности: "Yes" или "No"

        String fuelType = scanner.nextLine();
        double fuelLiters = Double.parseDouble(scanner.nextLine());
        String clubCar = scanner.nextLine();

        //• Бензин – 2.22 лева за един литър,
        //•	Дизел – 2.33 лева за един литър
        //•	Газ – 0.93 лева за литър

        double total = 0.0;


        switch (fuelType) {
            case "Gasoline":
                if (clubCar.equalsIgnoreCase("yes")) {
                    total = 2.04 * fuelLiters;
                } else {
                    total = 2.22 * fuelLiters;
                }
                break;
            case "Diesel":
                if (clubCar.equalsIgnoreCase("yes")) {
                    total = 2.21 * fuelLiters;
                } else {
                    total = 2.33 * fuelLiters;
                }
                break;
            case "Gas":
                if (clubCar.equalsIgnoreCase("yes")) {
                    total = 0.85 * fuelLiters;
                } else {
                    total = 0.93 * fuelLiters;
                }
                break;
        }

        //Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
        // при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.

        if (fuelLiters > 20 && fuelLiters <= 25) {
            total *= 0.92;
        } else if (fuelLiters > 25) {
            total *= 0.90;
        }

        System.out.println(String.format("%.2f lv.", total));


    }
}
