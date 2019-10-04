package WhileLoopMoreExercises;

import java.util.Scanner;

public class ReportSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int needMoney = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        int counter = 1;
        int cs_count = 0;
        int cc_count = 0;
        int cs = 0;
        int cc = 0;
        while (!"End".equals(command)) {
            int priceOfObject = Integer.parseInt(command);
            if (counter % 2 == 0) {
                if (priceOfObject >= 10) {
                    cc_count++;
                    cc += priceOfObject;
                    System.out.println("Product sold!");
                    needMoney -= priceOfObject;
                } else {
                    System.out.println("Error in transaction!");
                }

            } else {
                if (priceOfObject <= 100) {
                    cs_count++;
                    cs += priceOfObject;
                    System.out.println("Product sold!");
                    needMoney -= priceOfObject;
                } else {
                    System.out.println("Error in transaction!");
                }
            }
            if (needMoney <= 0) {
                //o	"Average CS: {средно плащане в кеш на човек}"
                //o	"Average CC: {средно плащане с карта на човек}"
                System.out.printf("Average CS: %.2f%n", cs * 1.0 / cs_count);
                System.out.printf("Average CC: %.2f", cc * 1.0 / cc_count);

                break;
            }
            counter++;
            command = scanner.nextLine();
        }
        if(command.equals("End")){
            System.out.println("Failed to collect required money for charity.");
        }
    }
}
