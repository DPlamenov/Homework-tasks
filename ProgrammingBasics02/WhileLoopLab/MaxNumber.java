package WhileLoopLab;

import java.util.Scanner;

public class MaxNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = Integer.parseInt(scanner.nextLine());
        int max_number = Integer.MIN_VALUE;
        int n = 0;
        while (n < number){
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if(currentNumber > max_number){
               max_number = currentNumber;
            }
            n++;
        }
        System.out.println(max_number);
    }
}
