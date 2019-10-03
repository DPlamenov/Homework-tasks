package com.company.SimpleOperationsandCalculationsMoreExercises;

import java.util.Scanner;

public class TrainingLab {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double w = Double.parseDouble(scanner.nextLine());
        double h = Double.parseDouble(scanner.nextLine());

        w *= 100;
        h *= 100;
        double forMovement = 100;
        h -= forMovement;
        double deskPerRow = Math.floor(h /70);
        double row = Math.floor(w / 120);

        double desk = deskPerRow * row - 3;
        System.out.printf("%.0f", desk  );

    }
}
