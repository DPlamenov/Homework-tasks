package NestedLoopsExercise;

import java.util.Scanner;

public class EqualSumsLeftRightPosition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n1 = Integer.parseInt(scanner.nextLine());
        int n2 = Integer.parseInt(scanner.nextLine());

        for (int i = n1; i <= n2; i++) {
            int left = 0;
            int right = 0;
            left += Integer.parseInt(String.valueOf(String.valueOf(i).charAt(0))) + Integer.parseInt(String.valueOf(String.valueOf(i).charAt(1)));
            right += Integer.parseInt(String.valueOf(String.valueOf(i).charAt(3))) + Integer.parseInt(String.valueOf(String.valueOf(i).charAt(4)));
            if (left == right) {
                System.out.print(i + " ");
            } else {
                if (left > right) {
                    right += Integer.parseInt(String.valueOf(String.valueOf(i).charAt(2)));
                    if(left == right){
                        System.out.print(i + " ");
                    }
                } else {
                    left += Integer.parseInt(String.valueOf(String.valueOf(i).charAt(2)));
                    if(left == right){
                        System.out.print(i + " ");
                    }
                }
            }

        }
    }
}
