package NestedLoopsExercise;

import java.util.Scanner;

public class Fishing {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int quota = Integer.parseInt(scanner.nextLine());
        int counter = 1;
        double profit = 0;
        double lose = 0;
        String command;
        int fishes = 0;
        while (!"Stop".equals(command = scanner.nextLine())) {
            String fishName = command;
            fishes++;
            double kilo = Double.parseDouble(scanner.nextLine());
            double priceOfFish = 0;
            for (int i = 0; i < fishName.length(); i++) {
                priceOfFish += fishName.charAt(i); // ? Lower
            }
            if (counter % 3 == 0) {
                profit += priceOfFish / kilo;
            } else {
                lose += priceOfFish / kilo;
            }
            if (quota == counter) {
                System.out.println("Lyubo fulfilled the quota!");
                break;
            }
            counter++;
        }
        double profitDiff = profit - lose;
        double profitDiffAbs = Math.abs(profitDiff);
        if (profitDiff >= 0) {
            System.out.printf("Lyubo's profit from %d fishes is %.2f leva.", fishes, profitDiffAbs);

        } else {
            System.out.printf("Lyubo lost %.2f leva today.", profitDiffAbs);
        }
    }
}
