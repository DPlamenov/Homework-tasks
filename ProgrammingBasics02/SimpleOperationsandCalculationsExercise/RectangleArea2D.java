package SimpleOperationsandCalculationsExercise;

import java.util.Scanner;

public class RectangleArea2D {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double x1 = Double.parseDouble(scanner.nextLine());
        double y1 = Double.parseDouble(scanner.nextLine());
        double x2 = Double.parseDouble(scanner.nextLine());
        double y2 = Double.parseDouble(scanner.nextLine());
        double x = Math.abs(x1 - x2);
        double y = Math.abs(y1 - y2);

        double s = x * y;
        double p = 2 * (x + y);
        System.out.printf("%.2f%n", s);
        System.out.printf("%.2f", p);
    }
}
