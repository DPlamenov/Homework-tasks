package NestedLoopsExercise;

import java.util.Scanner;

public class Coding {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = String.valueOf(n).length() - 1; i >= 0; i--) {
            int lastInt = n % 10;
            n /= 10;
            if (lastInt == 0) {
                System.out.println("ZERO");
                continue;
            }
            char x = (char) (lastInt + 33);

            for (int j = 1; j <= lastInt; j++) {
                //char x = (char) (lastInt + 33);
                System.out.print(x);
            }
            System.out.println();
            //System.out.println(lastInt);
        }
    }
}
