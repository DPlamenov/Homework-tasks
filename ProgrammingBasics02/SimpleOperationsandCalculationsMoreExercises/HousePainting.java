package com.company.SimpleOperationsandCalculationsMoreExercises;

import java.util.Scanner;

public class HousePainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double greenPaintLiterFor = 3.40;
        double redPaintLiterFor = 4.30;

        double x = Double.parseDouble(scanner.nextLine());
        double y = Double.parseDouble(scanner.nextLine());
        double h = Double.parseDouble(scanner.nextLine());

        double wallSquare = (2 * (Math.pow(x, 2))) - 1.2 * 2;
        double wallRectangle = (2 * (x * y)) - 2 * (1.5 * 1.5);
        double walls = wallSquare + wallRectangle;

        double roofRectangle = 2 * (x * y);
        double roofTriangle = 2 * ((x * h) / 2);
        double roofs = roofRectangle + roofTriangle;

        double greenPaintTotal = walls / greenPaintLiterFor;
        double redPaintTotal = roofs / redPaintLiterFor;

        System.out.println(String.format("%.2f", greenPaintTotal));
        System.out.println(String.format("%.2f", redPaintTotal));
    }
}
