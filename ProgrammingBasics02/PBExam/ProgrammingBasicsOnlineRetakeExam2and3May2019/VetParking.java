package PBExam.ProgrammingBasicsOnlineRetakeExam2and3May2019;

import java.util.Scanner;

public class VetParking {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int hoursPerDay = Integer.parseInt(scanner.nextLine());
        double total = 0;
        for (int i = 1; i <= days ; i++) {
            double totalDay = 0;
            for (int j = 1; j <= hoursPerDay ; j++) {
                if(i %2 == 0 && j %2 != 0){
                    totalDay += 2.50;
                }else if(i %2 !=0 && j %2 == 0){
                    totalDay += 1.25;
                }else{
                    totalDay += 1;
                }
            }
            total += totalDay;
            System.out.printf("Day: %d - %.2f leva%n", i, totalDay);
        }
        System.out.printf("Total: %.2f leva", total);
    }
}
