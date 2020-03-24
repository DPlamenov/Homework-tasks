package ExamPreparation.SampleExam;

import java.util.Scanner;

public class MultiplyTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int firstNumber = n % 10;
        int secondNumber = n % 100 / 10;
        int lastNumber = n / 100;

        for (int i = 1; i <= firstNumber; i++) {
            for (int j = 1; j <= secondNumber ; j++) {
                for (int k = 1; k <= lastNumber ; k++) {
                    System.out.printf("%d * %d * %d = %d;%n",i,j,k,i*j*k);
                }
            }
        }
    }
}
