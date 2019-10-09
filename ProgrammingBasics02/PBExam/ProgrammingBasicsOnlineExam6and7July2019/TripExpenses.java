package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class TripExpenses {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());

        String command;

        double lastDay = 0;
        for (int i = 1; i <= days; i++) {
            double day = 60 + lastDay;
            int product = 0;
            while (!"Day over".equals(command = scanner.nextLine())) {
                double price = Double.parseDouble(command);
                product++;
                if (day - price <= 0) {
                    System.out.printf("Daily limit exceeded! You've bought %d products.%n", product);
                    day -= price;
                    break;
                }
                day -= price;
            }

            if (day > 0) {
                lastDay = day;
                System.out.printf("Money left from today: %.2f. You've bought %d products.%n", lastDay, product);
            }
        }
    }
}
