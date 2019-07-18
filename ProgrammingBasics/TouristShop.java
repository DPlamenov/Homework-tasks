package pb.homework;

import java.util.Scanner;

public class TouristShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        double left_budget = budget;
        int counter = 0;
        String command;
        while (!"Stop".equals(command = scanner.nextLine())){
            counter++;
            String name = command;
            double price = Double.parseDouble(scanner.nextLine());
            if(counter %3 == 0){
                if(left_budget >= price / 2){
                    left_budget -= price / 2;
                }else{
                    System.out.printf("You don't have enough money!%n");
                    System.out.printf("You need %.2f leva!", price / 2 - left_budget);
                    break;
                }
            }else{
                if(left_budget >= price){
                    left_budget -= price;
                }else{
                    System.out.printf("You don't have enough money!%n");
                    System.out.printf("You need %.2f leva!", price  - left_budget);
                    break;
                }
            }
        }
        if(command.equals("Stop")){
            System.out.printf("You bought %d products for %.2f leva.", counter, budget - left_budget);
        }

    }
}
