package WhileLoopExercise;

import java.util.Scanner;

public class Walking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;
        int totalSteps = 0;
        boolean goingHome = false;
        boolean isGoalReached = false;
        while (true) {
            int steps = 0;
            command = scanner.nextLine();
            if (command.equalsIgnoreCase("Going home")) {
                goingHome = true;
                break;
            } else {
                steps += Integer.parseInt(command);
            }
            totalSteps += steps;
            if (totalSteps >= 10000) {
                isGoalReached = true;
                break;
            }
        }
        if (goingHome) {
            int addSteps = Integer.parseInt(scanner.nextLine());
            totalSteps += addSteps;
            if (totalSteps >= 10000) {
                isGoalReached = true;
            } else {
                System.out.printf("%d more steps to reach goal.", Math.abs(totalSteps - 10000));
            }
        }
        if (isGoalReached) {
            System.out.println("Goal reached! Good job!");
        }
    }
}
