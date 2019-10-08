package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class CruiseShip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
//Първият ред – вид круиз – текст с възможности: "Mediterranean", "Adriatic", "Aegean"
//• Вторият ред – вид каюта – текст с възможности : "standard cabin", "cabin with balcony",
//"apartment"
//• Третият ред – брой нощувки – цяло число в интервала [1… 50]
        String cruise = scanner.nextLine();
        String cabin = scanner.nextLine();
        int nights = Integer.parseInt(scanner.nextLine());
        double total = nights * 4; // Because there are 4 people
        switch (cruise) {
            case "Mediterranean":
                if (cabin.equals("standard cabin")) {
                    total *= 27.50;
                } else if (cabin.equals("cabin with balcony")) {
                    total *= 30.20;
                } else if (cabin.equals("apartment")) {
                    total *= 40.50;
                }
                break;
            case "Adriatic":
                if (cabin.equals("standard cabin")) {
                    total *= 22.99;
                } else if (cabin.equals("cabin with balcony")) {
                    total *= 25.00;
                } else if (cabin.equals("apartment")) {
                    total *= 34.99;
                }
                break;
            case "Aegean":
                if (cabin.equals("standard cabin")) {
                    total *= 23.00;
                } else if (cabin.equals("cabin with balcony")) {
                    total *= 26.60;
                } else if (cabin.equals("apartment")) {
                    total *= 39.80;
                }
                break;
        }
        if (nights > 7) {
            total *= 0.75;
        }
        System.out.printf("Annie's holiday in the %s sea costs %.2f lv.", cruise, total);
    }
}
