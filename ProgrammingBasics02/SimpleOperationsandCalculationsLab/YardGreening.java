package com.company.SimpleOperationsandCalculationsLab;

import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double area = Double.parseDouble(scanner.nextLine());
        double price = area * 7.61;
        double discount = price * 0.18;
        double total = price - discount;
        System.out.printf("The final price is: %.2f lv.%n", total);
        System.out.printf("The discount is: %.2f lv.", discount);
    }
}
