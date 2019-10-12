package NestedLoopsExercise;

import java.util.Scanner;

public class TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        String command;
        double currentResult = 0;
        int x = 0;
        double totalGrades = 0;
        while (!"Finish".equals(command = scanner.nextLine())){
            currentResult = 0;
            for (int i = 1; i <= n; i++) {
                x++;
                currentResult += Double.parseDouble(scanner.nextLine());
            }
            totalGrades += currentResult;
            currentResult /= n * 1.0;
            System.out.printf("%s - %.2f.%n", command, currentResult);
            //System.out.printf("%s - %.2f%n", command, currentResult);

        }
        System.out.printf("Student's final assessment is %.2f.", totalGrades / x);
    }
}
