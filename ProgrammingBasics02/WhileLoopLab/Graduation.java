package WhileLoopLab;

import java.util.Scanner;

public class Graduation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int _class = 1;
        double average_grade = 0;
        while (_class <= 12) {
            double grade = Double.parseDouble(scanner.nextLine());
            if (grade >= 4.00) {
                _class++;
                average_grade += grade;
            }
        }
        System.out.println(String.format("%s graduated. Average grade: %.2f", name, average_grade / 12.0));
    }
}
