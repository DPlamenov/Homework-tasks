package PBExam.ProgrammingBasicsOnlineRetakeExam2and3May2019;

import java.util.Scanner;

public class TouristShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        String command;
        int counter = 1;
        double total = 0;
        while (!"Stop".equals(command = scanner.nextLine())) {
            String productName = command;
            double productPrice = Double.parseDouble(scanner.nextLine());
            if (counter % 3 == 0) {
                productPrice /= 2;
            }
            total += productPrice;

            if(budget < total){
                break;
            }
            counter++;
        }
        if(command.equals("Stop")){
            System.out.printf("You bought %d products for %.2f leva.", counter - 1, total);
        }else{
            System.out.println("You don't have enough money!");
            System.out.printf("You need %.2f leva!", total - budget);
        }
    }
}
