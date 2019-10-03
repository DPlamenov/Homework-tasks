package ConditionalStatementsExercise;

import java.util.Scanner;

public class Scholarship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double income = Double.parseDouble(scanner.nextLine());
        double averageGrade = Double.parseDouble(scanner.nextLine());
        double minSalary = Double.parseDouble(scanner.nextLine());

        double social = 0.0;
        double excellent = 0.0;

        if (income < minSalary && averageGrade > 4.50) {
            social = 0.35 * minSalary;
        }
        if (averageGrade >= 5.50) {
            excellent = averageGrade * 25;
        }

        if (social == 0.0 && excellent == 0.0) {
            System.out.println("You cannot get a scholarship!");
        } else if (social > excellent) {
            System.out.printf("You get a Social scholarship %.0f BGN", Math.floor(social));
        } else if (excellent >= social) {
            System.out.printf("You get a scholarship for excellent results %.0f BGN", Math.floor(excellent));
        }

    }
}
