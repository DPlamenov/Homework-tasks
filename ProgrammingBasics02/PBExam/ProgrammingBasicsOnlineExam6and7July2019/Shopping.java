package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int gpuCount = Integer.parseInt(scanner.nextLine());
        int cpuCount = Integer.parseInt(scanner.nextLine());
        int ramCount = Integer.parseInt(scanner.nextLine());

        double total = gpuCount * 250;
        double cpuPrice = 0.35 * total * cpuCount;
        double ramPrice = 0.10 * total * ramCount;
        total += cpuPrice + ramPrice;
        if(gpuCount > cpuCount){
            total *= 0.85;
        }
        if (budget >= total) {
            System.out.printf("You have %.2f leva left!", budget - total);
        } else {
            System.out.printf("Not enough money! You need %.2f leva more!", Math.abs(budget - total));
        }


    }
}
