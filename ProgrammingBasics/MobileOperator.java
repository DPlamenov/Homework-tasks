package pb.homework;

import java.util.Scanner;

public class MobileOperator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String contract_period = scanner.nextLine();
        String contract_type = scanner.nextLine();
        String mobile_internet = scanner.nextLine();
        int month = Integer.parseInt(scanner.nextLine());
        double perMonth = 0;

        switch (contract_type) {
            case "Small":
                if (contract_period.equals("one")) {
                    perMonth = 9.98;
                } else if (contract_period.equals("two")) {
                    perMonth = 8.58;
                }
                break;

            case "Middle":
                if (contract_period.equals("one")) {
                    perMonth = 18.99;
                } else if (contract_period.equals("two")) {
                    perMonth = 17.09;
                    break;
                }

            case "Large":
                if (contract_period.equals("one")) {
                    perMonth = 25.98;
                } else if (contract_period.equals("two")) {
                    perMonth = 23.59;
                }
                break;

            case "ExtraLarge":
                if (contract_period.equals("one")) {
                    perMonth = 35.99;
                } else if (contract_period.equals("two")) {
                    perMonth = 31.79;
                }
                break;
        }
        if(mobile_internet.equals("yes")){
            if(perMonth <= 10){
                perMonth += 5.50;
            }else if(perMonth <= 30){
                perMonth += 4.35;
            }else if(perMonth > 30){
                perMonth += 3.85;
            }
        }
        double total =  perMonth * month;;
        if(contract_period.equals("two")){
            double discount = total * 0.0375;
            total -= discount;
        }
        System.out.printf("%.2f lv.", total);
    }
}
