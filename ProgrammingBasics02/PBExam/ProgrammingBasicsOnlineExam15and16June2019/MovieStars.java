package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class MovieStars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String command;
        double actorSalary = 0;
        while (!"ACTION".equals(command = scanner.nextLine())) {
            String actorName = command;
            if (actorName.length() > 15) {
                actorSalary = 0.20 * budget;
            } else {
                actorSalary = Double.parseDouble(scanner.nextLine());
            }

            budget -= actorSalary;
            if (budget < 0) {
                break;
            }
        }

       if(budget >= 0){
           System.out.printf("We are left with %.2f leva.", budget);
       }else{
           System.out.printf("We need %.2f leva for our actors.", Math.abs(budget));
       }
    }
}
