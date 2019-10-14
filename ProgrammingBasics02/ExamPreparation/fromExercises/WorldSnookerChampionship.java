package ExamPreparation.fromExercises;

import java.util.Scanner;

public class WorldSnookerChampionship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
        //2. Вид на билета – текст - “Standard”, “Premium” или “VIP”
        //3. Брой билети – цяло число в интервала [1 … 30]
        //4. Снимка с трофея – символ – 'Y' (да) или 'N' (не)

        String stage = scanner.nextLine();
        String typeTicket = scanner.nextLine();
        int countTickets = Integer.parseInt(scanner.nextLine());
        String photoWithCup = scanner.nextLine();
        double total = countTickets;
        //              Четвъртфинал    Полуфинал       Финал
        //Стандартен    55.50 £/бр.     75.88 £/бр.     110.10 £/бр.
        //Премиум       105.20 £/бр.    125.22 £/бр.    160.66 £/бр.
        //ВИП           118.90 £/бр.    300.40 £/бр.    400 £/бр
        switch (typeTicket) {
            case "Standard":
                if (stage.equals("Quarter final")) {
                    total *= 55.50;
                } else if (stage.equals("Semi final")) {
                    total *= 75.88;
                } else if (stage.equals("Final")) {
                    total *= 110.10;
                }
                break;
            case "Premium":
                if (stage.equals("Quarter final")) {
                    total *= 105.20;
                } else if (stage.equals("Semi final")) {
                    total *= 125.22;
                } else if (stage.equals("Final")) {
                    total *= 160.66;
                }
                break;
            case "VIP":
                if (stage.equals("Quarter final")) {
                    total *= 118.90;
                } else if (stage.equals("Semi final")) {
                    total *= 300.40;
                } else if (stage.equals("Final")) {
                    total *= 400.00;
                }
                break;
        }
        boolean discountPhotoWithCup = false;
        if (total > 4000) {
            total *= 0.75;
            discountPhotoWithCup = true;
        } else if (total > 2500) {
            total *= 0.90;
        }

        if (photoWithCup.equals("Y") && !discountPhotoWithCup) {
            total += (countTickets * 40);
        }
        System.out.printf("%.2f", total);
    }
}
