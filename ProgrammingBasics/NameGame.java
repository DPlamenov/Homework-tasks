package com.company;

import java.util.Scanner;

public class NameGame {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = "";
        String winner = "";
        double winner_points = 0;
        while (!"Stop".equals(name = scanner.nextLine())) {
            int _point = 0;
            for (int i = 0; i < name.length(); i++){
                int num = Integer.parseInt(scanner.nextLine());
                if(name.charAt(i) == num){
                    _point += 10;
                }else{
                    _point += 2;
                }
            }
            if(winner_points <= _point){
                winner_points = _point;
                winner = name;
            }
        }
        System.out.printf("The winner is %s with %.0f points!", winner, winner_points);
    }
}
