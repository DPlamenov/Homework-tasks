package ForLoopMoreExercises;

import java.util.Scanner;

public class GameOfIntervals {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double points = 0;
        double p1 = 0;
        double p2 = 0;
        double p3 = 0;
        double p4 = 0;
        double p5 = 0;
        double p6 = 0;
        for (int i = 0; i < n; i++) {
            int currentPoints = Integer.parseInt(scanner.nextLine());

            if (currentPoints >= 0 && currentPoints < 10) {
                points += 0.2 * currentPoints;
                p1++;
            } else if (currentPoints >= 10 && currentPoints < 20) {
                points += 0.3 * currentPoints;
                p2++;
            } else if (currentPoints >= 20 && currentPoints < 30) {
                points += 0.4 * currentPoints;
                p3++;
            } else if (currentPoints >= 30 && currentPoints < 40) {
                points += 50;
                p4++;
            } else if (currentPoints >= 40 && currentPoints <= 50) {
                points += 100;
                p5++;
            } else {
                points /= 2;
                p6++;
            }
        }
        System.out.printf("%.2f%n", points);
        System.out.printf("From 0 to 9: %.2f%%%n", p1/n * 100);
        System.out.printf("From 10 to 19: %.2f%%%n", p2/n * 100);
        System.out.printf("From 20 to 29: %.2f%%%n", p3/n * 100);
        System.out.printf("From 30 to 39: %.2f%%%n", p4/n * 100);
        System.out.printf("From 40 to 50: %.2f%%%n", p5/n * 100);
        System.out.printf("Invalid numbers: %.2f%%", p6/n * 100);
    }
}
