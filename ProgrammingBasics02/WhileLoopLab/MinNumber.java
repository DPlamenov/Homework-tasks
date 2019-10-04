package WhileLoopLab;

import java.util.Scanner;

public class MinNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        int minNumber = Integer.MAX_VALUE;
        int n = 0;
        while (n < number){
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if(currentNumber < minNumber){
                minNumber = currentNumber;
            }
            n++;
        }
        System.out.println(minNumber);
    }
}
