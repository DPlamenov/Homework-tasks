package com.company.NestedConditionalStatementsExercise;

import java.util.Scanner;

public class Volleyball {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	Първият ред съдържа думата "leap" (високосна година) или "normal" (невисокосна).
        //•	Вторият ред съдържа цялото число p – брой празници в годината (които не са събота и неделя).
        //•	Третият ред съдържа цялото число h – брой уикенди, в които Влади си пътува до родния град.
        String isLeapOrNormal = scanner.nextLine();
        int p = Integer.parseInt(scanner.nextLine());
        int h = Integer.parseInt(scanner.nextLine());

        int weekendsInSofia = 48 - h;
        double gamesInSofia = (3 / 4.0) * weekendsInSofia;
        double gamesInCounty = h;
        double gamesInSunday = (2 / 3.0) * p;

        double total = gamesInSofia + gamesInSunday + gamesInCounty;
        if(isLeapOrNormal.equalsIgnoreCase("leap")){
            total *= 1.15;
        }

        System.out.println(String.format("%.0f", Math.floor(total)));
    }
}
