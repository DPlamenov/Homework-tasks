package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class MovieDestination {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
        //2. Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
        //3. Сезон – текст, с възможности "Summer" и "Winter"
        //4. Брой дни – цяло число в диапазона [1… 40]
        double budget = Double.parseDouble(scanner.nextLine());
        String destination = scanner.nextLine();
        String season = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());
        double total = 0;
        switch (destination) {
            case "Dubai":
                if (season.equalsIgnoreCase("winter")) {
                    total = 45000 * days;
                } else if (season.equalsIgnoreCase("summer")) {
                    total = 40000 * days;
                }
                break;
            case "Sofia":
                if (season.equalsIgnoreCase("winter")) {
                    total = 17000 * days;
                } else if (season.equalsIgnoreCase("summer")) {
                    total = 12500 * days;
                }
                break;
            case "London":
                if (season.equalsIgnoreCase("winter")) {
                    total = 24000 * days;
                } else if (season.equalsIgnoreCase("summer")) {
                    total = 20250 * days;
                }
                break;
        }
        if (destination.equalsIgnoreCase("Dubai")) {
            total *= 0.70;
        }
        if (destination.equalsIgnoreCase("Sofia")) {
            total *= 1.25;
        }

        if (budget >= total) {
            System.out.printf("The budget for the movie is enough! We have %.2f leva left!", budget - total);
        } else {
            System.out.printf("The director needs %.2f leva more!", total - budget);
        }
    }
}
