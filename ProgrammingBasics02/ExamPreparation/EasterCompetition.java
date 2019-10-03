package ExamPreparation;

import java.util.Scanner;

public class EasterCompetition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int totalSugarBread = Integer.parseInt(scanner.nextLine());

        String winnerName = "";
        int winnerPoints = 0;

        for (int i = 1; i <= totalSugarBread ; i++) {
            String cooker = scanner.nextLine();
            String command = scanner.nextLine();
            int currentPoints = 0;
            while (!"Stop".equalsIgnoreCase(command)){
                int points = Integer.parseInt(command);
                currentPoints += points;
                command = scanner.nextLine();
            }
            System.out.printf("%s has %d points.%n", cooker, currentPoints);

            if(currentPoints > winnerPoints){
                winnerPoints = currentPoints;
                winnerName = cooker;
                System.out.printf("%s is the new number 1!%n", winnerName);

            }
        }
        System.out.printf("%s won competition with %d points!", winnerName, winnerPoints);
    }
}
