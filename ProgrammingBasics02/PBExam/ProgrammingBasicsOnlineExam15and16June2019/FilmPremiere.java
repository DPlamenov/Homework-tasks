package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class FilmPremiere {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String movie = scanner.nextLine();
        String packet = scanner.nextLine();
        int tickets = Integer.parseInt(scanner.nextLine());;
        double totalBill = tickets;
        switch (movie) {
            case "John Wick":
                if (packet.equalsIgnoreCase("Drink")) {
                    totalBill *= 12.00;
                } else if (packet.equalsIgnoreCase("Popcorn")) {
                    totalBill *= 15.00;
                } else if (packet.equalsIgnoreCase("Menu")) {
                    totalBill *= 19.00;
                }
                break;
            case "Star Wars":
                if (packet.equalsIgnoreCase("Drink")) {
                    totalBill *= 18.00;
                } else if (packet.equalsIgnoreCase("Popcorn")) {
                    totalBill *= 25.00;
                } else if (packet.equalsIgnoreCase("Menu")) {
                    totalBill *= 30.00;
                }
                break;
            case "Jumanji":
                if (packet.equalsIgnoreCase("Drink")) {
                    totalBill *= 9.00;
                } else if (packet.equalsIgnoreCase("Popcorn")) {
                    totalBill *= 11.00;
                } else if (packet.equalsIgnoreCase("Menu")) {
                    totalBill *= 14.00;
                }
                break;
        }
        if(movie.equalsIgnoreCase("Star Wars") && tickets >= 4){
            totalBill *= 0.70;
        }
        if(movie.equalsIgnoreCase("Jumanji") && tickets == 2){
            totalBill *= 0.85;
        }
        System.out.printf("Your bill is %.2f leva.", totalBill);
    }
}
