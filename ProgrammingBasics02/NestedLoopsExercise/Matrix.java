package NestedLoopsExercise;

import java.util.Scanner;

public class Matrix {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n1 = Integer.parseInt(scanner.nextLine());
        int n2 = Integer.parseInt(scanner.nextLine());
        int n3 = Integer.parseInt(scanner.nextLine());
        int n4 = Integer.parseInt(scanner.nextLine());
        for (int i = n1; i <= n2; i++) {
            for (int j = n1; j <= n2 ; j++) {
                for (int k = n3; k <= n4; k++) {
                    for (int l = n3; l <= n4 ; l++) {
                        if(((i + l) == (j + k)) && (i != j) && (k != l)){
                            System.out.printf("%d%d%n", i, j);
                            System.out.printf("%d%d%n", k, l);
                            System.out.println();
                        }
                    }
                }
            }
        }
    }
}
