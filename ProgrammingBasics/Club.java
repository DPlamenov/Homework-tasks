package bg.softuni;

import java.util.Scanner;

public class Club{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double need_money = Double.parseDouble(scanner.nextLine());
        String cocktail = scanner.nextLine();
        double total = 0;
        while (!"Party!".equals(cocktail)){
            int count = Integer.parseInt(scanner.nextLine());
            double price_ = cocktail.length() * count;
            if(price_ %2 != 0){
                double discount = price_ * 0.25;
                price_ -= discount;
            }
            total += price_;
            if(total >= need_money){
                System.out.println("Target acquired.");
                break;
            }
            cocktail = scanner.nextLine();

        }
        if("Party!".equals(cocktail)){
            System.out.printf("We need %.2f leva more.%n", need_money - total);
        }
        System.out.printf("Club income - %.2f leva.", total);
    }
}
