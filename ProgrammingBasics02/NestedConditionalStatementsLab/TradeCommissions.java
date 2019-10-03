package NestedConditionalStatementsLab;

import java.util.Scanner;

public class TradeCommissions {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String town = scanner.nextLine();
        double sold = Double.parseDouble(scanner.nextLine());
        double result = 0;
        switch (town){
            //Sofia	5%	7%	8%	12%
            //Varna	4.5%	7.5%	10%	13%
            //Plovdiv	5.5%	8%	12%	14.5%
            case "Sofia":
                if(sold >= 0 && sold <= 500){
                    result = 0.05 * sold;
                }else if(sold > 500 && sold <= 1000){
                    result = 0.07 * sold;
                }else if(sold > 1000 && sold <= 10000){
                    result = 0.08 * sold;
                }else if(sold > 10000){
                    result = 0.12 * sold;
                }else{
                    System.out.println("error");
                }
                break;
            case "Varna":
                if(sold >= 0 && sold <= 500){
                    result = 0.045 * sold;
                }else if(sold > 500 && sold <= 1000){
                    result = 0.075 * sold;
                }else if(sold > 1000 && sold <= 10000){
                    result = 0.10 * sold;
                }else if(sold > 10000){
                    result = 0.13 * sold;
                }else{
                    System.out.println("error");
                }
                break;
            case "Plovdiv":
                if(sold >= 0 && sold <= 500){
                    result = 0.055 * sold;
                }else if(sold > 500 && sold <= 1000){
                    result = 0.08 * sold;
                }else if(sold > 1000 && sold <= 10000){
                    result = 0.12 * sold;
                }else if(sold > 10000){
                    result = 0.145 * sold;
                }else{
                    System.out.println("error");
                }
                break;
            default:
                System.out.println("error");

        }
        if(result != 0){
            System.out.printf("%.2f", result);
        }
    }
}
