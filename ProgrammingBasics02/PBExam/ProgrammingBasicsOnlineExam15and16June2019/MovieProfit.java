package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class MovieProfit {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //.1 Име на филм - текст
        //2. Брой дни - цяло число в диапазона [1… 90]
        //3. Брой билети - цяло число в диапазона [100… 100000]
        //4. Цена на билет - реално число в диапазона [5.0… 25.0]
        //5. Процент за киното - цяло число в диапазона [5... 35]
        double total = 0;

        String movie = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());
        int tickets = Integer.parseInt(scanner.nextLine());
        double ticketPrice = Double.parseDouble(scanner.nextLine());
        int percentForCinema = Integer.parseInt(scanner.nextLine());

        total += (ticketPrice * tickets * days);
        double p = percentForCinema / 100.0;
        p = total * p;
        total -= p;
        System.out.printf("The profit from the movie %s is %.2f lv.", movie, total);
    }
}
