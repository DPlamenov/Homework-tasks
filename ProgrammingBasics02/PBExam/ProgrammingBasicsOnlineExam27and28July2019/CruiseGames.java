package PBExam.ProgrammingBasicsOnlineExam27and28July2019;

import java.util.Scanner;

public class CruiseGames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String playerName = scanner.nextLine();
        int playedGames = Integer.parseInt(scanner.nextLine());
        int volleyballGames = 0;
        int tennisGames = 0;
        int badmintonGames = 0;
        int volleyballPoints = 0;
        int tennisPoints = 0;
        int badmintonPoints = 0;
        double total = 0;
        for (int i = 1; i <= playedGames; i++) {
            String game = scanner.nextLine();
            double points = Integer.parseInt(scanner.nextLine());
            switch (game) {
                case "volleyball":
                    volleyballGames++;
                    points *= 1.07;
                    volleyballPoints += points;
                    break;
                case "tennis":
                    tennisGames++;
                    points *= 1.05;
                    tennisPoints += points;
                    break;
                case "badminton":
                    badmintonGames++;
                    points *= 1.02;
                    badmintonPoints += points;
                    break;
            }
            total += points;
        }
        total = Math.floor(total);
        double volleyballAvg = Math.floor(volleyballPoints * 1.0 / volleyballGames);
        double tennisAvg = Math.floor(tennisPoints * 1.0 / tennisGames);
        double badmintonAvg = Math.floor(badmintonPoints * 1.0 / badmintonGames);
        if (volleyballAvg >= 75 && tennisAvg >= 75 && badmintonAvg >= 75) {
            System.out.printf("Congratulations, %s! You won the cruise games with %.0f points.", playerName, total);
        }else{
            System.out.printf("Sorry, %s, you lost. Your points are only %.0f.", playerName, total);
        }

    }
}
