package PBExam.ProgrammingBasicsOnlineExam27and28July2019;

import java.util.Scanner;

public class Reservation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int reservationDay = Integer.parseInt(scanner.nextLine());
        int reservationMonth = Integer.parseInt(scanner.nextLine());
        int enterDay = Integer.parseInt(scanner.nextLine());
        int enterMonth = Integer.parseInt(scanner.nextLine());
        int leftDay = Integer.parseInt(scanner.nextLine());
        int leftMonth = Integer.parseInt(scanner.nextLine());

        int days = enterDay - reservationDay; // Diff enterday and reserv
        int m = reservationMonth - enterMonth;
        double total = 0;
        int d = leftDay - enterDay;
        total = d;
        if (days > 10) {
            total *= 25;
        } else if (Math.abs(m) >= 1) {
            total *= 25;
            total *= 0.8;
        } else {
            total *= 30;
        }

        System.out.printf("Your stay from %d/%d to %d/%d will cost %.2f", enterDay, enterMonth, leftDay, leftMonth, total);
    }
}
