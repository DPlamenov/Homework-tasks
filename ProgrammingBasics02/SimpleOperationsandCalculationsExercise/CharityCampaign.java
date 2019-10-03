package SimpleOperationsandCalculationsExercise;

import java.util.Scanner;

public class CharityCampaign {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int cookers = Integer.parseInt(scanner.nextLine());
        int cakes = Integer.parseInt(scanner.nextLine());
        int waffles = Integer.parseInt(scanner.nextLine());
        int pancakes = Integer.parseInt(scanner.nextLine());

        double cakes_price = cakes * 45.00;
        double waffles_price = waffles * 5.80;
        double pancakes_price = pancakes * 3.20;

        double for_day = (cakes_price + waffles_price + pancakes_price) * cookers;
        double total = for_day * days;

        double result = (7 / 8.0) * total;
        System.out.printf("%.2f", result);
    }
}
