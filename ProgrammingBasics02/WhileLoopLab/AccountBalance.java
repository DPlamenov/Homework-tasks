package WhileLoopLab;

import java.util.Scanner;

public class AccountBalance {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int transaction = Integer.parseInt(scanner.nextLine());

        int n = 0;
        double balance = 0;
        while (n < transaction) {
            n++;
            double newBalance = Double.parseDouble(scanner.nextLine());
            if (newBalance > 0) {
                balance += newBalance;
                System.out.printf("Increase: %.2f%n", newBalance);
            } else {
                System.out.println("Invalid operation!");
                break;
            }

        }
        System.out.printf("Total: %.2f", balance);

    }
}
