package com.company;

import java.util.Scanner;

public class Shopping{

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int gpu = Integer.parseInt(scanner.nextLine());
        int cpu = Integer.parseInt(scanner.nextLine());
        int ram = Integer.parseInt(scanner.nextLine());

        double gpu_price = gpu * 250.0;
        double cpu_price = 0.35 * gpu_price * cpu;
        double ram_price = 0.10 * gpu_price * ram;

        double total = gpu_price + cpu_price + ram_price;
        if (gpu > cpu) {
            double discount = 0.15 * total;
            total -= discount;
        }
        if(budget >= total){
            System.out.printf("You have %.2f leva left!", budget - total);
        }else{
            System.out.printf("Not enough money! You need %.2f leva more!", Math.abs(budget - total));
        }
    }
}
