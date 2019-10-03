package ConditionalStatementsExercise;

import java.util.Scanner;

public class BonusScore {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double bonus_points = 0;
        if(n <= 100){
            bonus_points = 5;
        }else if(n > 100 && n < 1000){
            bonus_points = 0.20 * n;
        }else if(n > 1000){
            bonus_points = 0.10 * n;
        }
        if(n %2 == 0){
            bonus_points += 1;
        }
        if(n %10 == 5){
            bonus_points += 2;
        }

        System.out.println(bonus_points);
        System.out.println(String.format("%f", n + bonus_points));
    }
}
