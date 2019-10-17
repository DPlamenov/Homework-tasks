package DrawingFigureswithLoopsMoreExercises;

import java.util.Scanner;

public class Sunglasses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= 2 * n; i++) {
            System.out.print('*');
        }
        for (int i = 1; i <= n; i++) {
            System.out.print(' ');
        }
        for (int i = 1; i <= n * 2; i++) {
            System.out.print('*');
        }
        System.out.println();
        for (int i = 0; i < n - 2; i++) {
            System.out.print('*');
            for (int j = 1; j <= 2 * n - 2; j++) {
                System.out.print('/');
            }
            System.out.print('*');
            if ((n - 1) / 2 - 1 == i) {
                for (int j = 1; j <= n; j++) {
                    System.out.print('|');
                }
            } else {
                for (int j = 1; j <= n; j++) {
                    System.out.print(' ');
                }
            }
            System.out.print('*');
            for (int j = 1; j <= 2 * n - 2; j++) {
                System.out.print('/');
            }
            System.out.print('*');
            System.out.println();

        }
        for (int x = 1; x <= 2 * n; x++) {
            System.out.print('*');
        }
        for (int y = 1; y <= n; y++) {
            System.out.print(' ');
        }
        for (int z = 1; z <= n * 2; z++) {
            System.out.print('*');
        }
    }
}
