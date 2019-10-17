package DrawingFigureswithLoopsMoreExercises;

import java.util.Scanner;

public class House {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int atFirstRow = 0;
        if (n % 2 == 0) {
            for (int k = 1; k <= (n - 2) / 2; k++) {
                System.out.print('-');
            }
            System.out.print("**");
            atFirstRow = 2;
            for (int k = 1; k <= (n - 2) / 2; k++) {
                System.out.print('-');
            }
        } else {
            for (int k = 1; k <= (n - 1) / 2; k++) {
                System.out.print('-');
            }
            System.out.print("*");
            atFirstRow = 1;
            for (int k = 1; k <= (n - 1) / 2; k++) {
                System.out.print('-');
            }
        }
        System.out.println();
        int nextRow = atFirstRow + 2;
        for (int i = 1; i <= ((n + 1) / 2) - 1; i++) {
            for (int j = 1; j <= (n - nextRow) / 2; j++) {
                System.out.print("-");
            }
            for (int j = 1; j <= nextRow; j++) {
                System.out.print("*");
            }
            for (int j = 1; j <= (n - nextRow) / 2; j++) {
                System.out.print("-");
            }
            nextRow += 2;
            System.out.println();
        }
        for (int i = 1; i <= (n / 2); i++) {
            System.out.print("|");
            for (int j = 1; j <= n - 2; j++) {
                System.out.print("*");
            }
            System.out.print("|");
            System.out.println();
        }
    }
}
