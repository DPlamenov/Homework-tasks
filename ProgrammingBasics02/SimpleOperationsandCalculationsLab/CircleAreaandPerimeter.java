package SimpleOperationsandCalculationsLab;

import java.util.Scanner;

public class CircleAreaandPerimeter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double r = scanner.nextDouble();
        double s = Math.PI * r * r;
        double p = 2 * r * Math.PI;
        System.out.printf("%.2f", s);
        System.out.printf("%.2f", p);
    }
}
