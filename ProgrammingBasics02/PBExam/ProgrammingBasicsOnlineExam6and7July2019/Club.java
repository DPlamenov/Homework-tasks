package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class Club {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double needMoney = Double.parseDouble(scanner.nextLine());
        String command;
        double sum = 0;
        while (!"Party!".equals(command = scanner.nextLine())){
            String cocktail = command;
            int cocktailNumber = Integer.parseInt(scanner.nextLine());

            int cocktailPrice = cocktail.length();
            double total = cocktailPrice * cocktailNumber;
            if(total %2 != 0){
                total *= 0.75;
            }
            sum+= total;
            if(sum >= needMoney){
                System.out.println("Target acquired.");
                break;
            }
        }
        if(command.equals("Party!")){
            System.out.printf("We need %.2f leva more.%n", needMoney - sum);
        }
        System.out.printf("Club income - %.2f leva.", sum);
    }
}
