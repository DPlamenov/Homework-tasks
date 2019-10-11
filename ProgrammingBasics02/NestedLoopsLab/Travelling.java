package NestedLoopsLab;

import java.util.Scanner;

public class Travelling {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;
        while (!"End".equals(command = scanner.nextLine())){
            String country = command;
            double needMoney = Double.parseDouble(scanner.nextLine());
            double saved = 0;
            while (needMoney > saved){
                saved += Double.parseDouble(scanner.nextLine());
            }
            System.out.printf("Going to %s!%n", country);
        }
    }
}
