package ExamPreparation;

import java.util.Scanner;

public class TravelAgency03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String city = scanner.nextLine();
        String packet = scanner.nextLine();
        String vipCard = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());

        boolean isValid = true;
        double price = 0.0;
        if (days < 1) {
            System.out.println("Days must be positive number!");
            isValid = false;
        }
        switch (city) {
            case "Bansko":
            case "Borovets":
                if (packet.equalsIgnoreCase("noEquipment")) {
                    if (days > 7) {
                        price = (days - 1) * 80.00;
                    } else {
                        price = days * 80.00;
                    }
                } else if (packet.equalsIgnoreCase("withEquipment")) {
                    if (days > 7) {
                        price = (days - 1) * 100.00;
                    } else {
                        price = days * 100.00;
                    }
                } else {
                    isValid = false;
                    System.out.println("Invalid input!");
                }
                break;
            case "Varna":
            case "Burgas":
                if (packet.equalsIgnoreCase("withBreakfast")) {
                    if (days > 7) {
                        price = (days - 1) * 130.00;
                    } else {
                        price = days * 130.00;
                    }
                } else if (packet.equalsIgnoreCase("noBreakfast")) {
                    if (days > 7) {
                        price = (days - 1) * 100.00;
                    } else {
                        price = days * 100.00;
                    }
                } else {
                    isValid = false;
                    System.out.println("Invalid input!");
                }
                break;
            default:
                isValid = false;
                System.out.println("Invalid input!");
        }

        if (vipCard.equalsIgnoreCase("yes")) {
            if (packet.equalsIgnoreCase("withEquipment")) {
                price *= 0.90;
            } else if (packet.equalsIgnoreCase("noEquipment")) {
                price *= 0.95;
            } else if (packet.equalsIgnoreCase("withBreakfast")) {
                price *= 0.88;
            } else if (packet.equalsIgnoreCase("noBreakfast")) {
                price *= 0.93;
            }

        }
        if (isValid) {
            System.out.printf("The price is %.2flv! Have a nice time!", price);
        }

    }
}
