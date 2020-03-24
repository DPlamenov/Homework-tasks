package ExamPreparation.SampleExam;

import java.util.Scanner;

public class SushiTime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String sushiType = scanner.nextLine();
        String restaurant = scanner.nextLine();
        int count = Integer.parseInt(scanner.nextLine());
        String delivery = scanner.nextLine();
        boolean invalidRestaurant = false;
        double total = 0;
        switch (restaurant) {
            case "Sushi Zone":
                if (sushiType.equals("sashimi")) {
                    total = 4.99 * count;
                } else if (sushiType.equals("maki")) {
                    total = 5.29 * count;
                } else if (sushiType.equals("uramaki")) {
                    total = 5.99 * count;
                } else if (sushiType.equals("temaki")) {
                    total = 4.29 * count;
                }
                break;
            case "Sushi Time":
                if (sushiType.equals("sashimi")) {
                    total = 5.49 * count;
                } else if (sushiType.equals("maki")) {
                    total = 4.69 * count;
                } else if (sushiType.equals("uramaki")) {
                    total = 4.49 * count;
                } else if (sushiType.equals("temaki")) {
                    total = 5.19 * count;
                }
                break;
            case "Sushi Bar":
                if (sushiType.equals("sashimi")) {
                    total = 5.25 * count;
                } else if (sushiType.equals("maki")) {
                    total = 5.55 * count;
                } else if (sushiType.equals("uramaki")) {
                    total = 6.25 * count;
                } else if (sushiType.equals("temaki")) {
                    total = 4.75 * count;
                }
                break;
            case "Asian Pub":
                if (sushiType.equals("sashimi")) {
                    total = 4.50 * count;
                } else if (sushiType.equals("maki")) {
                    total = 4.80 * count;
                } else if (sushiType.equals("uramaki")) {
                    total = 5.50 * count;
                } else if (sushiType.equals("temaki")) {
                    total = 5.50 * count;
                }
                break;
            default:
                invalidRestaurant = true;
                break;
        }
        if (delivery.equals("Y")) {
            double deliveryPrice = 0.20 * total;
            total += deliveryPrice;
        }
        if (invalidRestaurant) {
            System.out.printf("%s is invalid restaurant!", restaurant);
        }
        if (!invalidRestaurant) {
            System.out.printf("Total price: %.0f lv.", Math.ceil(total));
        }
    }
}
