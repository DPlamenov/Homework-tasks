package com.company.SimpleOperationsandCalculationsLab;

import java.util.Scanner;

public class FishTank {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int length = Integer.parseInt(scanner.nextLine());
        int width = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        double percent = Double.parseDouble(scanner.nextLine());

        double volume = length * width * height;
        double volume_liters = volume * 0.001;
        double percent_ = percent / 100;

        double result = volume_liters * (1 - percent_);
        System.out.printf("%.3f", result);
    }
}
