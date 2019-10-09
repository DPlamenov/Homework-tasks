package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class TravelAgency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String cityName = scanner.nextLine();
        String packetName = scanner.nextLine();
        String isVip = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());
        double total = 0;
        boolean isValid = true;
        if (days > 7) {
            days--;
        }
        if (days < 1) {
            isValid = false;
            System.out.println("Days must be positive number!");
        }
        if (cityName.equals("Bansko") || cityName.equals("Borovets")) {
            if (packetName.equals("withEquipment")) {
                total = days * 100.0;
                if (isVip.equals("yes")) {
                    total *= 0.90;
                }
            } else if (packetName.equals("noEquipment")) {
                total = days * 80.0;
                if (isVip.equals("yes")) {
                    total *= 0.95;
                }
            } else {
                System.out.println("Invalid input!");
            }
        } else if (cityName.equals("Varna") || cityName.equals("Burgas")) {
            if (packetName.equals("withBreakfast")) {
                total = days * 130.0;
                if (isVip.equals("yes")) {
                    total *= 0.88;
                }
            } else if (packetName.equals("noBreakfast")) {
                total = days * 100.0;
                if (isVip.equals("yes")) {
                    total *= 0.93;
                }
            } else {
                isValid = false;
                System.out.println("Invalid input!");
            }
        } else {
            isValid = false;
            System.out.println("Invalid input!");
        }
        if (isValid) {
            System.out.printf("The price is %.2flv! Have a nice time!", total);
        }
    }
}
