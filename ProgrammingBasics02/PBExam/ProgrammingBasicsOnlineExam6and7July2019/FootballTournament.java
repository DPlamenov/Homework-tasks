package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class FootballTournament {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String clubName = scanner.nextLine();
        int playedMatch = Integer.parseInt(scanner.nextLine());
        int win = 0;
        int draw = 0;
        int lose = 0;
        if (playedMatch == 0) {
            System.out.printf("%s hasn't played any games during this season.", clubName);
            return;
        }
        int totalPoints = 0;
        for (int i = 1; i <= playedMatch; i++) {
            String result = scanner.nextLine();
            switch (result) {
                case "W":
                    win++;
                    totalPoints += 3;
                    break;
                case "D":
                    draw++;
                    totalPoints += 1;
                    break;
                case "L":
                    lose++;
                    break;
            }
        }
        double winRate = win * 1.0 / playedMatch * 100;
        System.out.printf("%s has won %d points during this season.%n", clubName, totalPoints);
        System.out.println("Total stats:");
        System.out.printf("## W: %d%n", win);
        System.out.printf("## D: %d%n", draw);
        System.out.printf("## L: %d%n", lose);
        System.out.printf("Win rate: %.2f%%", winRate);
    }
}
