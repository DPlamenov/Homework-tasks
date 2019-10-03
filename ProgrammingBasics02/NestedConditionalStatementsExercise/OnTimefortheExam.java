package NestedConditionalStatementsExercise;

import java.util.Scanner;

public class OnTimefortheExam {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int examStartHours = Integer.parseInt(scanner.nextLine());
        int examStartMinutes = Integer.parseInt(scanner.nextLine());
        int arriveHours = Integer.parseInt(scanner.nextLine());
        int arriveMinutes = Integer.parseInt(scanner.nextLine());

        //•	“Late”, ако студентът пристига по-късно от часа на изпита.
        //•	“On time”, ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
        //•	“Early”, ако студентът пристига повече от 30 минути преди часа на изпита.

        int exam = (examStartHours * 60) + examStartMinutes;
        int arrive = (arriveHours * 60) + arriveMinutes;

        int examArriveDiff = arrive - exam;
        boolean isLate = false;
        //When is positive -> student arrive after exam
        if (examArriveDiff > 0) {
            isLate = true;
        }
        examArriveDiff = Math.abs(examArriveDiff);
        if (isLate) {
            System.out.println("Late");
        } else if ((examArriveDiff >= 0 && examArriveDiff <= 30)) {
            System.out.println("On time");
        } else if (examArriveDiff > 30) {
            System.out.println("Early");
        }

        if (examArriveDiff > 0) {
            if (!(isLate) && examArriveDiff < 60) {
                System.out.printf("%d minutes before the start", examArriveDiff % 60);
            }else if(!(isLate) && examArriveDiff >= 60){
                if(examArriveDiff % 60 <= 9){
                    System.out.printf("%d:0%d hours before the start", examArriveDiff / 60, examArriveDiff % 60);
                }else {
                    System.out.printf("%d:%d hours before the start", examArriveDiff / 60, examArriveDiff % 60);
                }
            }
            //•	 “mm minutes after the start” за закъснение под час.
            //•	“hh:mm hours after the start” за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например “1:03”.
            if(isLate && examArriveDiff < 60){
                System.out.printf("%d minutes after the start", examArriveDiff % 60);
            }else if(isLate && examArriveDiff >= 60){
                if(examArriveDiff % 60 <= 9){
                    System.out.printf("%d:0%d hours after the start", examArriveDiff / 60, examArriveDiff % 60);
                }else {
                    System.out.printf("%d:%d hours after the start", examArriveDiff / 60, examArriveDiff % 60);
                }
            }
        }
    }
}
