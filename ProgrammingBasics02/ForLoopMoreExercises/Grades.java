package ForLoopMoreExercises;

import java.util.Scanner;

public class Grades {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int students = Integer.parseInt(scanner.nextLine());
        double gradeGreaterThanFive = 0;
        double gradeGreaterThanFour = 0;
        double gradeGreaterThanThree = 0;
        double gradeLessThanThree = 0;
        double average = 0;
        for (int i = 1; i <= students ; i++) {
            double gradeForStudents = Double.parseDouble(scanner.nextLine());
            average += gradeForStudents;
            if(gradeForStudents >= 5.00){
                gradeGreaterThanFive++;
            }else if(gradeForStudents >= 4.00){
                gradeGreaterThanFour++;
            }else if(gradeForStudents >= 3.00){
                gradeGreaterThanThree++;
            }else{
                gradeLessThanThree++;
            }
        }
        average /= students;
        System.out.printf("Top students: %.2f%%%n", gradeGreaterThanFive / students * 100.0);
        System.out.printf("Between 4.00 and 4.99: %.2f%%%n", gradeGreaterThanFour / students * 100.0);
        System.out.printf("Between 3.00 and 3.99: %.2f%%%n", gradeGreaterThanThree / students * 100.0);
        System.out.printf("Fail: %.2f%%%n", gradeLessThanThree / students * 100.0);
        System.out.printf("Average: %.2f", average);
    }
}
