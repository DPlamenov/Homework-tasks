package DrawingFigureswithLoopsMoreExercises;

import java.util.Scanner;

public class ChristmasTree {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= n; i++) {
            System.out.print(" ");
        }
        System.out.print(" | ");
        for (int i = 1; i <= n; i++) {
            System.out.print(" ");
        }
        System.out.println();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }

            System.out.print(" | ");

            for (int j = i; j >= 1; j--) {
                System.out.print("*");
            }
            for (int j = n-i; j >= 1; j--) {
                System.out.print(" ");
            }

            System.out.println();
        }
    }
}
