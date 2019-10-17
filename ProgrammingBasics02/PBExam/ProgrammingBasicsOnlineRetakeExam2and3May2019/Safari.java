package PBExam.ProgrammingBasicsOnlineRetakeExam2and3May2019;

import java.util.Scanner;

public class Safari {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Бюджет – реално число в интервала [0.00… 10000.00]
        //• Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
        //• Ден от седмицата – текст с възможности "Saturday" и "Sunday"
        double budget = Double.parseDouble(scanner.nextLine());
        double needGasoline = Double.parseDouble(scanner.nextLine());
        String dayOfWeek = scanner.nextLine();

        double priceForGasoline = needGasoline * 2.10;
        double total = priceForGasoline + 100;
        if (dayOfWeek.equals("Saturday")) {
            total *= 0.9;
        }else{
            total *= 0.8;
        }
        if(budget >= total){
            System.out.printf("Safari time! Money left: %.2f lv.", budget - total);
        }else{
            System.out.printf("Not enough money! Money needed: %.2f lv.", total -budget);
        }
    }
}
