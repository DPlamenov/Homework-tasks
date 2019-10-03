package ExamPreparation;

import java.util.Scanner;

public class VetParking06 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int hoursPerDay = Integer.parseInt(scanner.nextLine());
        double total = 0;
        for (int i = 1; i <= days; i++) {
            double totalForDay = 0;
            for (int j = 1; j <= hoursPerDay; j++) {
                if (i % 2 == 0 && j % 2 != 0) {
                    totalForDay += 2.50;
                } else if (i % 2 != 0 && j % 2 == 0) {
                    totalForDay += 1.25;
                } else {
                    totalForDay += 1;
                }
            }
            total += totalForDay;
            System.out.printf("Day: %d - %.2f leva%n", i, totalForDay);
        }
        System.out.printf("Total: %.2f leva", total);
    }
}
