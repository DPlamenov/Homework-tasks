package PBExam.ProgrammingBasicsOnlineRetakeExam2and3May2019;

import java.util.Scanner;

public class FoodDelivery {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int chicken = Integer.parseInt(scanner.nextLine());
        int fish = Integer.parseInt(scanner.nextLine());
        int vegan = Integer.parseInt(scanner.nextLine());

        double total = (chicken * 10.35) + (fish * 12.40) + (vegan * 8.15);
        total *= 1.2;
        total += 2.50;

        System.out.printf("Total: %.2f", total);
    }
}
