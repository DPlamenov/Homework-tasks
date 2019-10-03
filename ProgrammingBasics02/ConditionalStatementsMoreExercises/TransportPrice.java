package com.company.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class TransportPrice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int distance = Integer.parseInt(scanner.nextLine());
        String dayOrNight = scanner.nextLine();

        double total = 0;

        if (distance < 20) {
            total += 0.70;
            if(dayOrNight.equals("day")){
                total += 0.79 * distance;
            }else {
                total += 0.90 * distance;
            }
        }else if(distance < 100){
            total += 0.09 * distance;
        }else{
            total += 0.06 * distance;
        }
        System.out.println(String.format("%.2f",total));
    }
}
