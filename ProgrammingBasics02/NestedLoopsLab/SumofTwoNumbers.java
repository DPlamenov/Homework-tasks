package NestedLoopsLab;

import java.util.Scanner;

public class SumofTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int start = Integer.parseInt(scanner.nextLine());
        int end = Integer.parseInt(scanner.nextLine());
        int magic = Integer.parseInt(scanner.nextLine());

        int totalCombinations = 0;
        int combinations = 0;
        boolean isMagic = false;
        int combinationsI = 0;
        int combinationsJ = 0;
        for (int i = start; i <= end; i++) {
            for (int j = start; j <= end; j++) {
                //System.out.println(String.format("%d - %d", i, j));
                combinations++;
                if (i + j == magic) {
                    combinationsI = i;
                    combinationsJ = j;

                    isMagic = true;
                    break;
                }

            }
            if(isMagic){
                break;
            }
        }
        if(isMagic){
            System.out.println(String.format("Combination N:%d (%d + %d = %d)", combinations, combinationsI, combinationsJ, magic));
        }else{
            System.out.printf("%d combinations - neither equals %d", combinations, magic);
        }
    }
}
