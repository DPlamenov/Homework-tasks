package NestedLoopsExercise;

import java.util.Scanner;

public class NumberPyramid {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int current = 1;
        boolean isBigger = false;
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                if (current > n) {
                    isBigger = true;
                    break;
                }
                System.out.printf("%d ", current);
                current++;

            }
            if (isBigger) {
                break;
            }
            System.out.println();
        }
    }
}
