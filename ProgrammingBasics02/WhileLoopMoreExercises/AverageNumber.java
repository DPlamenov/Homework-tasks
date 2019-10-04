package WhileLoopMoreExercises;

import java.util.Scanner;

public class AverageNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double average = 0;
        for (int i = 1; i <= n; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());
            average += currentNumber;
        }
        System.out.printf("%.2f", average / n);
    }
}
