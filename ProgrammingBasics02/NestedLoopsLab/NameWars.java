package NestedLoopsLab;

import java.util.Scanner;

public class NameWars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String winner = "";
        int winnerPoints = 0;
        String command;
        while (!"STOP".equals(command = scanner.nextLine())){
            int currentWordAsciiValue = 0;
            for (int i = 0; i < command.length(); i++) {
                currentWordAsciiValue += command.charAt(i);
            }
            if(currentWordAsciiValue > winnerPoints){
                winnerPoints = currentWordAsciiValue;
                winner = command;
            }
        }
        System.out.printf("Winner is %s - %d!", winner, winnerPoints);
    }
}
