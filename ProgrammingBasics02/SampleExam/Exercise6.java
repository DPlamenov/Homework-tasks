package SampleExam;

import java.util.Scanner;

public class Exercise6 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int first = n % 10;
        int second = n % 100 / 10;
        int third = n / 100;

        for (int i = 1; i <= first ; i++) {
            for (int j = 1; j <= second ; j++) {
                for (int k = 1; k <= third ; k++) {
                    int result = i * j * k;
                    System.out.printf("%d * %d * %d = %d;%n", i, j, k, result);
                }
            }
        }
    }
}
