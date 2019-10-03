package com.company.SimpleOperationsandCalculationsMoreExercises;

import java.util.Scanner;

public class CelsiustoFahrenheit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double celsius = Double.parseDouble(scanner.nextLine());
        double fahrenheit = (celsius * 9) / 5 + 32;
        System.out.println(String.format("%.2f",fahrenheit));
    }
}
