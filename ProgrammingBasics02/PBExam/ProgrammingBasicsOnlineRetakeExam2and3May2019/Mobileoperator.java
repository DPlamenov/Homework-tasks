package PBExam.ProgrammingBasicsOnlineRetakeExam2and3May2019;

import java.util.Scanner;

public class Mobileoperator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //1. Срок на договор – текст – "one", или "two"
        //2. Тип на договор – текст – "Small", "Middle", "Large"или "ExtraLarge"
        //3. Добавен мобилен интернет – текст – "yes" или "no"
        //4. Брой месеци за плащане - цяло число в интервала [1 … 24]

        String contractTerm = scanner.nextLine();
        String contractType = scanner.nextLine();
        String mobileNet = scanner.nextLine();
        int month = Integer.parseInt(scanner.nextLine());

        double total = 0;
        double price = 0;
        switch (contractType) {
            case "Small":
                if (contractTerm.equals("one")) {
                    price = 9.98;
                } else {
                    price = 8.58;
                }
                break;
            case "Middle":
                if (contractTerm.equals("one")) {
                    price = 18.99;
                } else {
                    price = 17.09;
                }
                break;
            case "Large":
                if (contractTerm.equals("one")) {
                    price = 25.98;
                } else {
                    price = 23.59;
                }
                break;
            case "ExtraLarge":
                if (contractTerm.equals("one")) {
                    price = 35.99;
                } else {
                    price = 31.79;
                }
                break;
        }
        if(mobileNet.equals("yes")){
            if(price <= 10.00){
                price += 5.50;
            }else if(price <= 30.00){
                price += 4.35;
            }else{
                price += 3.85;
            }
        }
        total = price * month;
        if(contractTerm.equals("two")){
            total *= 0.9625;
        }
        System.out.printf("%.2f lv.", total);
    }
}
