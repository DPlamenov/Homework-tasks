package WhileLoopLab;

import java.util.Scanner;

public class Graduationpt2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int class_ = 1;
        double average = 0;
        boolean isGraduated = false;
        boolean isExcluded = false;
        int excluded = 0;

        while (true) {
            double grade = Double.parseDouble(scanner.nextLine());
            if (grade >= 4.00) {
                class_++;
                average += grade;
            } else {
                excluded++;
            }
            if (excluded > 1) {
                isExcluded = true;
                break;
            }
            if (class_ > 12) {
                isGraduated = true;
                break;
            }
        }

        if (isGraduated) {
            System.out.printf("%s graduated. Average grade: %.2f", name, average / 12);
        } else {
            System.out.printf("%s has been excluded at %d grade", name, class_);
        }
    }
}
