package NestedConditionalStatementsLab;

import java.util.Scanner;

public class SkiTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        String typeRoom = scanner.nextLine();
        String grade = scanner.nextLine();

        int night = days - 1;

        double total = 0.0;

        if (typeRoom.equals("room for one person")) {
            total = 18.00 * night;
        } else if (typeRoom.equals("apartment")) {
            total = 25.00 * night;
        } else if (typeRoom.equals("president apartment")) {
            total = 35.00 * night;
        }
        double discount = 0;
        if(typeRoom.equals("apartment") && days < 10){
            discount = 0.30 * total;
        }else if(typeRoom.equals("apartment") && days < 15){
            discount = 0.35 * total;
        }else if(typeRoom.equals("apartment") && days >= 15){
            discount = 0.50 * total;
        }

        if(typeRoom.equals("president apartment") && days < 10){
            discount = 0.10 * total;
        }else if(typeRoom.equals("president apartment") && days < 15){
            discount = 0.15 * total;
        }else if(typeRoom.equals("president apartment") && days >= 15){
            discount = 0.20 * total;
        }
        total -= discount;
        if(grade.equals("positive")){
            total *= 1.25;
        }else {
            total *= 0.9;
        }

        System.out.println(String.format("%.2f", total));
    }
}
