package NestedLoopsExercise;

import java.util.Scanner;

public class SpecialNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1111; i <= 9999; i++) {
            int currentInt = i;
            int last1 = currentInt / 1000;
            int last2 = currentInt % 1000 / 100;
            int last3 = currentInt % 100 / 10;
            int last4 = currentInt % 10;

            if(last2 == 0){
                continue;
            }
            if(last3 == 0){
                continue;
            }
            if(last4 == 0){
                continue;
            }
            if ((n % last1) == 0 && (n % last2) == 0 && (n % last3) == 0 && (n % last4) == 0) {
                System.out.printf(i + " ");
            }
        }
    }
}
