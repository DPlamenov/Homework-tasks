package com.company.ExamPreparation;

import java.util.Scanner;

public class Darts {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String player_name = scanner.nextLine();
        String command = scanner.nextLine();
        int start_points = 301;
        int current_points = start_points;
        int unsuccessful = 0;
        int successful = 0;
        boolean retire = false;
        while (!"Retire".equals(command) && current_points >= 0) {
            int give_points = 0;
            String pole = command;
            int points = Integer.parseInt(scanner.nextLine());
            switch (pole) {
                case "Single":
                    give_points = points;
                    break;
                case "Double":
                    give_points = 2 * points;
                    break;
                case "Triple":
                    give_points = 3 * points;
                    break;
            }
            if (give_points > current_points) {
                unsuccessful++;
            }else{
                successful++;
                current_points -= give_points;
            }
            if (current_points == 0) {
                System.out.printf("%s won the leg with %d shots.", player_name, successful);
                break;
            }
            command = scanner.nextLine();
        }
        if (command.equals("Retire")) {
            System.out.printf("%s retired after %d unsuccessful shots.", player_name, unsuccessful);
        }
    }
}
