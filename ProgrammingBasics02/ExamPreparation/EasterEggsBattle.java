package ExamPreparation;

import java.util.Scanner;

public class EasterEggsBattle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int eggFirstPlayer = Integer.parseInt(scanner.nextLine());
        int eggSecondPlayer = Integer.parseInt(scanner.nextLine());

        String command = scanner.nextLine();

        while (!command.equals("End of battle")) {
            String winner = command;
            if (winner.equals("one")) {
                eggSecondPlayer--;
            } else if (winner.equals("two")) {
                eggFirstPlayer--;
            }
            if (eggFirstPlayer == 0 || eggSecondPlayer == 0) {
                break;
            }
            command = scanner.nextLine();
        }
        if (command.equals("End of battle")) {
            System.out.printf("Player one has %d eggs left.%n", eggFirstPlayer);
            System.out.printf("Player two has %d eggs left.%n", eggSecondPlayer);
        }
        if (eggFirstPlayer == 0) {
            System.out.printf("Player one is out of eggs. Player two has %d eggs left.", eggSecondPlayer);
        } else if (eggSecondPlayer == 0) {
            System.out.printf("Player two is out of eggs. Player one has %d eggs left.", eggFirstPlayer);
        }

    }
}
