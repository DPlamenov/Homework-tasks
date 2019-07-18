package pb.homework;

import java.util.Scanner;

public class DivisionWithoutRemainder {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double per2 = 0;
        double per3 = 0;
        double per4 = 0;
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            if(currentNumber %2 == 0){
                per2++;
            }
            if(currentNumber %3 == 0){
                per3++;
            }
            if(currentNumber %4 == 0){
                per4++;
            }
        }
        System.out.printf("%.2f%%%n", per2 / n * 100);
        System.out.printf("%.2f%%%n", per3 / n * 100);
        System.out.printf("%.2f%%%n", per4 / n * 100);

    }
}
