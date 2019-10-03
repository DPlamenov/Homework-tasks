package ExamPreparation;

import java.util.Scanner;

public class EasterGuests {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double sugarBreadPrice = 4.00;
        double eggPrice = 0.45;

        int guest = Integer.parseInt(scanner.nextLine());
        int budget = Integer.parseInt(scanner.nextLine());

        double needSugarBread = Math.ceil(guest / 3.0);
        double needEgg = guest * 2;

        double sugarBreadTotal = needSugarBread * sugarBreadPrice;
        double eggTotal = needEgg * eggPrice;

        double total = sugarBreadTotal + eggTotal;

        if(budget >= total){
            System.out.printf("Lyubo bought %.0f Easter bread and %.0f eggs.%n", needSugarBread, needEgg);
            System.out.printf("He has %.2f lv. left.", budget - total);
        }else{
            System.out.println("Lyubo doesn't have enough money.");
            System.out.printf("He needs %.2f lv. more.", Math.abs(budget - total));
        }
    }
}
