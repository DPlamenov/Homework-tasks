package NestedConditionalStatementsExercise;

import java.util.Scanner;

public class HotelRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double apartment = 0.00;
        double studio = 0.00;

        //•	На първия ред е месецът – May, June, July, August, September или October
        //•	На втория ред е броят на нощувките – цяло число в интервала [0 ... 200]

        String month = scanner.nextLine();
        int nights = Integer.parseInt(scanner.nextLine());

        if (month.equalsIgnoreCase("May") || month.equalsIgnoreCase("October")) {
            apartment = 65.00 * nights;
            studio = 50.00 * nights;
        } else if (month.equalsIgnoreCase("June") || month.equalsIgnoreCase("September")) {
            apartment = 68.70 * nights;
            studio = 75.20 * nights;
        } else if (month.equalsIgnoreCase("July") || month.equalsIgnoreCase("August")) {
            apartment = 77.00 * nights;
            studio = 76.00 * nights;
        }

        if (nights > 14 && (month.equalsIgnoreCase("May") || month.equalsIgnoreCase("October"))) {
            studio *= 0.70;
            //•	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
        } else if (nights > 7 && (month.equalsIgnoreCase("May") || month.equalsIgnoreCase("October"))) {
            studio *= 0.95;
            //•	За студио, при повече от 7 нощувки през май и октомври : 5% намаление
        } else if (nights > 14 && (month.equalsIgnoreCase("June") || month.equalsIgnoreCase("September"))) {
            //•	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
            studio *= 0.80;
        }
        if (nights > 14) {
            apartment *= 0.90;
            //•	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
        }

        System.out.println(String.format("Apartment: %.2f lv.", apartment));
        System.out.println(String.format("Studio: %.2f lv.", studio));

    }
}
