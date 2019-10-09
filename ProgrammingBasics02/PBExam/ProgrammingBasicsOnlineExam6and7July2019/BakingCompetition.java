package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class BakingCompetition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        String command;
        int allBakerySold = 0;
        double sum = 0;
        for (int i = 1; i <= n; i++) {
            int cookies = 0;
            int cakes = 0;
            int waffles = 0;
            double currentSum = 0;
            String bakerName = scanner.nextLine();
            while (!"Stop baking!".equals(command = scanner.nextLine())) {
                int cookedCandies = Integer.parseInt(scanner.nextLine());
                switch (command) {
                    case "cookies":
                        cookies += cookedCandies;
                        currentSum += 1.50 * cookedCandies;
                        break;
                    case "cakes":
                        cakes += cookedCandies;
                        currentSum += 7.80 * cookedCandies;
                        break;
                    case "waffles":
                        waffles += cookedCandies;
                        currentSum += 2.30 * cookedCandies;
                        break;

                }

            }
            sum += currentSum;
            allBakerySold += (waffles + cakes + cookies);
            System.out.printf("%s baked %d cookies, %d cakes and %d waffles.%n", bakerName, cookies, cakes, waffles);

        }
        System.out.printf("All bakery sold: %d%n", allBakerySold);
        System.out.printf("Total sum for charity: %.2f lv.", sum);
    }
}
