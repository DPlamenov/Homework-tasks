package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class NameGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Име на играча с дължина n - текст
        //За всеки играч се четат n на брой реда:
        //• число – цяло число в интервала[0…127]
        String command;
        String winner = "";
        int winnerPoints = 0;

        while (!"Stop".equals(command = scanner.nextLine())) {
            int playerPoints = 0;
            for (int i = 0; i < command.length(); i++) {
                int currentInt = Integer.parseInt(scanner.nextLine());

                if ((int) command.charAt(i) == currentInt) {
                    playerPoints += 10;
                } else {
                    playerPoints += 2;
                }
            }
            if (playerPoints >= winnerPoints) {
                winnerPoints = playerPoints;
                winner = command;
            }
        }
        System.out.printf("The winner is %s with %d points!", winner, winnerPoints);
    }
}
