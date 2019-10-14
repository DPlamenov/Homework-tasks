package ExamPreparation.fromExercises;

import java.util.Scanner;

public class ChristmasDecoration {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int budget = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();

        while (!command.contains("Stop")) {
            String object = command;
            int price = 0;
            for (int i = 0; i < object.length(); i++) {

                price += object.charAt(i);
            }
            budget -= price;
            if (budget >= 0) {
                System.out.printf("Item successfully purchased!%n");

            } else {
                System.out.print("Not enough money!");
                return;

            }

            command = scanner.nextLine();
        }if (command.equals("Stop")) {
            System.out.printf("Money left: %d", budget);
        }

    }
}
