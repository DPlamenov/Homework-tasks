package com.company.NestedConditionalStatementsExercise;

import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //която чете тип прожекция (стринг),
        // брой редове и брой колони в залата (цели числа),
        // въведени от потребителя, и изчислява общите приходи
        // от билети при пълна зала.
        // Резултатът да се отпечата във формат като в примерите по-долу,
        // с 2 знака след десетичната точка.
        String type = scanner.nextLine();
        int r = Integer.parseInt(scanner.nextLine());
        int c = Integer.parseInt(scanner.nextLine());

        int totalSeats = r * c;
        double total = totalSeats;
        switch (type) {
            case "Premiere":
                total *= 12.00;
                break;
            case "Normal":
                total *= 7.50;
                break;
            case "Discount":
                total *= 5.00;
                break;
        }
        System.out.printf("%.2f leva", total);
    }
}
