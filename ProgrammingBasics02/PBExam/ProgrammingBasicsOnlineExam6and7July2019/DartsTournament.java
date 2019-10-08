package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class DartsTournament {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        boolean lost = false;
        boolean byZeroPoint = false;
        boolean center = false;
        int moves = 1;
        while (true) {
            String sector = scanner.nextLine();
            if(sector.equals("bullseye")){
                center = true;
                break;
            }
            int points = Integer.parseInt(scanner.nextLine());
            switch (sector) {
                case "number section":
                    n -= points;
                    break;
                case "double ring":
                    n -= points * 2;
                    break;
                case "triple ring":
                    n -= points * 3;
                    break;
            }
            if (center) {
                break;
            }
            if (n == 0) {
                byZeroPoint = true;
                break;
            }
            if (n < 0) {
                lost = true;
                break;
            }
            moves++;
        }
        if(byZeroPoint){
            System.out.printf("Congratulations! You won the game in %d moves!", moves);
        }else if(center){
            System.out.printf("Congratulations! You won the game with a bullseye in %d moves!", moves);
        }else {
            System.out.printf("Sorry, you lost. Score difference: %d.", Math.abs(n));
        }
    }
}
