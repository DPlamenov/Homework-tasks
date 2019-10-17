package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class FavoriteMovie {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;
        int counter = 1;
        String bestMovie = "";
        int best = 0;
        while (!"STOP".equals(command = scanner.nextLine())){
            if(counter >= 7){
                System.out.println("The limit is reached.");
                break;
            }
            int ascii = 0;
            for (int i = 0; i < command.length(); i++) {
                ascii += (int) command.charAt(i);
                if(command.charAt(i) >= 97 && command.charAt(i) <= 122){
                    ascii -= 2 * command.length();
                }else if(command.charAt(i) >= 65 && command.charAt(i) <= 90){
                    ascii -= command.length();
                }
            }
            counter++;
            if(ascii > best){
                best = ascii;
                bestMovie = command;
            }

        }
        System.out.printf("The best movie for you is %s with %d ASCII sum.", bestMovie, best);
    }
}
