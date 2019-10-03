package NestedConditionalStatementsLab;

import java.util.Scanner;

public class FruitShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String product = scanner.nextLine();
        String dayOfWeek = scanner.nextLine();
        double quantity = Double.parseDouble(scanner.nextLine());
        double total = 0.0;
        switch (product) {
            case "banana":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 2.70;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 2.50;
                }else{
                    System.out.println("error");
                }
                break;
            case "apple":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 1.25;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 1.20;
                }else{
                    System.out.println("error");
                }
                break;
            case "orange":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 0.90;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 0.85;
                }else{
                    System.out.println("error");
                }
                break;
            case "grapefruit":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 1.60;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 1.45;
                }else{
                    System.out.println("error");
                }
                break;
            case "kiwi":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 3.00;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 2.70;
                }else{
                    System.out.println("error");
                }
                break;
            case "pineapple":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 5.60;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 5.50;
                }else{
                    System.out.println("error");
                }
                break;
            case "grapes":
                if (dayOfWeek.equals("Saturday") || dayOfWeek.equals("Sunday")) {
                    total = quantity * 4.20;
                } else if (dayOfWeek.equals("Monday")
                        || dayOfWeek.equals("Tuesday")
                        || dayOfWeek.equals("Wednesday")
                        || dayOfWeek.equals("Thursday")
                        || dayOfWeek.equals("Friday")) {
                    total = quantity * 3.85;
                }else{
                    System.out.println("error");
                }
                break;
            default:
                System.out.println("error");
        }

        if(total != 0){
            System.out.printf("%.2f", total);
        }
    }
}
