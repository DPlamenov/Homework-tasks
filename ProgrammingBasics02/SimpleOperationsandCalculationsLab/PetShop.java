package com.company.SimpleOperationsandCalculationsLab;

import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int dogs = scanner.nextInt();
        int others = scanner.nextInt();
        double total = dogs * 2.50 + others * 4.00;
        System.out.printf("%.2f", total);
    }
}
