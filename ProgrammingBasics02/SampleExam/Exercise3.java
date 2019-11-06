package SampleExam;

import java.util.Scanner;

public class Exercise3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Видът суши – текст – една от възможностите: "sashimi", "maki", "uramaki", "temaki"
        //• Име на ресторанта – текст – една от възможностите: "Sushi Zone", "Sushi Time", "Sushi Bar",
        //"Asian Pub"
        //• Брой порции – цяло число в интервала [1…100]
        //• Поръчка – символ – 'Y' или 'N'
        String sushi = scanner.nextLine();
        String restaurant = scanner.nextLine();
        int serves = Integer.parseInt(scanner.nextLine());
        String delivery = scanner.nextLine();
        double price = 0;
        boolean invalid = false;
        switch (restaurant) {
            case "Sushi Zone":
                if (sushi.equals("sashimi")) {
                    price = 4.99;
                } else if (sushi.equals("maki")) {
                    price = 5.29;
                } else if (sushi.equals("uramaki")) {
                    price = 5.99;
                } else if (sushi.equals("temaki")) {
                    price = 4.29;
                }
                break;
            case "Sushi Time":
                if (sushi.equals("sashimi")) {
                    price = 5.49;
                } else if (sushi.equals("maki")) {
                    price = 4.69;
                } else if (sushi.equals("uramaki")) {
                    price = 4.49;
                } else if (sushi.equals("temaki")) {
                    price = 5.19;
                }
                break;
            case "Sushi Bar"://5.25 лв. 5.55 лв. 6.25 лв. 4.75 лв
                if (sushi.equals("sashimi")) {
                    price = 5.25;
                } else if (sushi.equals("maki")) {
                    price = 5.55;
                } else if (sushi.equals("uramaki")) {
                    price = 6.25;
                } else if (sushi.equals("temaki")) {
                    price = 4.75;
                }
                break;
            case "Asian Pub"://4.50 лв. 4.80 лв. 5.50 лв. 5.50 лв
                if (sushi.equals("sashimi")) {
                    price = 4.50;
                } else if (sushi.equals("maki")) {
                    price = 4.80;
                } else if (sushi.equals("uramaki")) {
                    price = 5.50;
                } else if (sushi.equals("temaki")) {
                    price = 5.50;
                }
                break;
            default:
                invalid = true;
                break;
        }

        double total = serves * price;
        if (delivery.equals("Y")) {
            total *= 1.20;
        }
        total = Math.ceil(total);
        if (!invalid) {
            System.out.printf("Total price: %.0f lv.", total);
        } else {
            System.out.printf("%s is invalid restaurant!", restaurant);
        }

    }
}
