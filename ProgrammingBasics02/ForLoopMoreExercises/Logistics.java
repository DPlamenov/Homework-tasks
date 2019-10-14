package ForLoopMoreExercises;

import java.util.Scanner;

public class Logistics {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int loadCount = Integer.parseInt(scanner.nextLine());
        double average = 0;
        double minibus = 0;
        double truck = 0;
        double train = 0;
        double total = 0;
        for (int i = 1; i <= loadCount; i++) {
            int loadTons = Integer.parseInt(scanner.nextLine());
            total += loadTons;
            if (loadTons <= 3) {
                minibus += loadTons;
                average += (loadTons * 200);
            } else if (loadTons <= 11) {
                truck += loadTons;
                average += (loadTons * 175);
            } else {
                train += loadTons;
                average += (loadTons * 120);
            }
        }
        average /= total;
        System.out.printf("%.2f%n", average);
        System.out.printf("%.2f%%%n", minibus / total * 100);
        System.out.printf("%.2f%%%n", truck / total * 100);
        System.out.printf("%.2f%%", train / total * 100);
    }
}
