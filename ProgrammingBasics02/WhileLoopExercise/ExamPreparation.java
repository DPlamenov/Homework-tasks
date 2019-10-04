package WhileLoopExercise;

import java.util.Scanner;

public class ExamPreparation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int unsatisfactoryGrades = Integer.parseInt(scanner.nextLine());
        int n = 0;
        int grades = 0;
        double average = 0;
        String name = "";
        String command = scanner.nextLine();
        while (!"Enough".equalsIgnoreCase(command)){
            name = command;
            int grade = Integer.parseInt(scanner.nextLine());
            average += grade;
            grades++;
            if(grade <= 4){
                n++;
            }
            if(n == unsatisfactoryGrades){
                System.out.printf("You need a break, %d poor grades.", unsatisfactoryGrades);
                break;
            }
            command = scanner.nextLine();
        }
        if(command.equalsIgnoreCase("Enough")){
            System.out.printf("Average score: %.2f%n", average / grades);
            System.out.printf("Number of problems: %d%n", grades);
            System.out.printf("Last problems: %s", name);
        }
    }
}
