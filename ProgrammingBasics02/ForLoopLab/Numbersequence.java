package ForLoopLab;

import java.util.Scanner;

public class Numbersequence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int minNumber = Integer.MAX_VALUE;
        int maxNumber = Integer.MIN_VALUE;

        for (int i = 1; i <= n ; i++) {
            int number = Integer.parseInt(scanner.nextLine());

            if(number < minNumber){
                minNumber = number;
            }
            if(number > maxNumber){
                maxNumber = number;
            }
        }
        System.out.println(String.format("Max number: %d",maxNumber));
        System.out.println(String.format("Min number: %d",minNumber));
    }
}
