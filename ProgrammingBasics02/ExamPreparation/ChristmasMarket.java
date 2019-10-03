package ExamPreparation;

import java.util.Scanner;

public class ChristmasMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double wanted_money = Double.parseDouble(scanner.nextLine());
        int fantasy = Integer.parseInt(scanner.nextLine());
        int horror = Integer.parseInt(scanner.nextLine());
        int romantic = Integer.parseInt(scanner.nextLine());

        double income = (fantasy * 14.90) + (horror * 9.80) + (romantic * 4.30);
        double tax = 0.20 * income;
        double after_taxes = income - tax;

        if(after_taxes > wanted_money){
            double for_workers = Math.floor(0.10 * (after_taxes - wanted_money));
            double for_donate = wanted_money;
            for_donate += (after_taxes - wanted_money) - for_workers;
            System.out.printf("%.2f leva donated.%n", for_donate);
            System.out.printf("Sellers will receive %.0f leva.", for_workers);
        }else{
            System.out.printf("%.2f money needed.", wanted_money - after_taxes);
        }
    }
}
