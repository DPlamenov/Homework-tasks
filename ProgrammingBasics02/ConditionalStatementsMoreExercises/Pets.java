package com.company.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Pets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	Първи ред – брой дни – цяло число в интервал [1…5000]
        //•	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
        //•	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
        //•	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
        //•	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]

        int days = Integer.parseInt(scanner.nextLine());
        int foodKilograms = Integer.parseInt(scanner.nextLine());
        double foodForDog = Double.parseDouble(scanner.nextLine());
        double foodForCat = Double.parseDouble(scanner.nextLine());
        double foodForTurtle = Double.parseDouble(scanner.nextLine()) / 1000;

        double leftFood = foodKilograms;

        leftFood -= (foodForDog * days);
        leftFood -= (foodForCat * days);
        leftFood -= (foodForTurtle * days);
        if (leftFood >= 0) {
            System.out.printf("%.0f kilos of food left.", Math.floor(leftFood));
        }else{
            System.out.printf("%.0f more kilos of food are needed.", Math.ceil(Math.abs(leftFood)));
        }
    }
}
