package ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class SleepyTomCat {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int weekDays = Integer.parseInt(scanner.nextLine());

        int weekPlay = weekDays * 127;
        int workPlay = (365 - weekDays) * 63;

        int totalPlay = weekPlay + workPlay;

        if(totalPlay > 30000){
            System.out.println("Tom will run away");
            int m = totalPlay - 30000;
            System.out.printf("%d hours and %d minutes more for play", m / 60, m % 60);
        }else {
            System.out.println("Tom sleeps well");
            int m = totalPlay - 30000;
            m = Math.abs(m);
            System.out.printf("%d hours and %d minutes less for play", m / 60, m % 60);
            //o	На първия ред отпечатайте: “Tom sleeps well”
            //o	 На втория ред отпечатайте разликата от нормата във формат:
            //“{H} hours and {M} minutes less for play”
        }
    }
}
