package SimpleOperationsandCalculationsExercise;

import java.util.Scanner;

public class DanceHall {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double l = Double.parseDouble(scanner.nextLine());
        double w = Double.parseDouble(scanner.nextLine());
        double a = Double.parseDouble(scanner.nextLine());

        double hall = (l * 100) * (w * 100);
        double garderob = (a * 100) * (a * 100);
        double peika = hall / 10;
        double left = hall - (garderob + peika);
        double people = left / 7040;
        System.out.printf("%.0f", Math.floor(people));
    }
}
