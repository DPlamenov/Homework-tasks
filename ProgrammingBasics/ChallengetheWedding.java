package com.company;

import java.util.Scanner;

public class ChallengetheWedding{

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int man = Integer.parseInt(scanner.nextLine());
        int woman = Integer.parseInt(scanner.nextLine());
        int tables = Integer.parseInt(scanner.nextLine());

        int counter = 0;
        for (int i = 1; i <= man ; i++) {
            for (int j = 1; j <= woman ; j++) {
                if(counter >= tables) {
                    break;
                }
                System.out.printf("(%d <-> %d) ", i,j);
                counter++;

            }
        }

    }
}
