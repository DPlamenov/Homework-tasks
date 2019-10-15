package ForLoopMoreExercises;

import java.util.Scanner;

public class FootballLeague {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double a = 0;
        double b = 0;
        double v = 0;
        double g = 0;
        int capacity = Integer.parseInt(scanner.nextLine());
        int peoples = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= peoples; i++) {
            String sector = scanner.nextLine();
            switch (sector) {
                case "A":
                    a++;
                    break;
                case "B":
                    b++;
                    break;
                case "V":
                    v++;
                    break;
                case "G":
                    g++;
                    break;
            }
        }
        System.out.printf("%.2f%%%n", a / peoples * 100);
        System.out.printf("%.2f%%%n", b / peoples * 100);
        System.out.printf("%.2f%%%n", v / peoples * 100);
        System.out.printf("%.2f%%%n", g / peoples * 100);
        System.out.printf("%.2f%%", peoples * 1.0 / capacity * 100);
    }
}
