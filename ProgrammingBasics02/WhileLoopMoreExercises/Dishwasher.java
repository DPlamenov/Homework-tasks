package WhileLoopMoreExercises;

import java.util.Scanner;

public class Dishwasher {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int bottlesOfDetergent = Integer.parseInt(scanner.nextLine());
        double totalDetergent = bottlesOfDetergent * 750.0;

        int dish = 0;
        int pot = 0;
        boolean isLessThanNeed = false;
        String command = scanner.nextLine();
        int counter = 1;
        while (!"End".equals(command)) {
            int utensil = Integer.parseInt(command);
            if (counter % 3 == 0) {
                pot += utensil;
                totalDetergent -= (utensil * 15);
            } else {
                dish += utensil;
                totalDetergent -= (utensil * 5);
            }
            if (totalDetergent < 0) {
                isLessThanNeed = true;
                break;
            }
            counter++;
            command = scanner.nextLine();
        }
        if (isLessThanNeed) {
            System.out.printf("Not enough detergent, %.0f ml. more necessary!", Math.abs(totalDetergent));
        } else {
            //"{брой чисти чинии} dishes and {брой чисти тенджери} pots were washed."
            //"Leftover detergent {количество останал препарат} ml."
            System.out.println("Detergent was enough!");
            System.out.printf("%d dishes and %d pots were washed.%n", dish, pot);
            System.out.printf("Leftover detergent %.0f ml.", totalDetergent);
        }
    }
}
