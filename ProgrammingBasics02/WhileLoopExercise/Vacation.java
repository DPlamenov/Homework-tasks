package WhileLoopExercise;

import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double needMoney = Double.parseDouble(scanner.nextLine());
        double balance = Double.parseDouble(scanner.nextLine());
        double money_ = needMoney - balance;
        int maxSpendOperation = 0;
        int days = 0;
        while (true) {
            String spendOrSave = scanner.nextLine();
            double money = Double.parseDouble(scanner.nextLine());
            days++;

            if (spendOrSave.equalsIgnoreCase("spend")) {
                if(money > balance){

                    money = balance;
                }
                balance -= money;
                maxSpendOperation++;
            } else {
                maxSpendOperation = 0;
                balance += money;
            }
            if(balance >=  needMoney){
                System.out.printf("You saved the money for %d days.", days);
                break;
            }
            if(maxSpendOperation == 5){
                System.out.printf("You can't save the money.%n");
                System.out.printf("%d", days);
                break;
            }

        }

    }
}
