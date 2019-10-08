package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class Seats {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //for
        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= n; i++) {
            String number = scanner.nextLine();
            if (number.length() == 4) {
                if (number.charAt(0) >= 65 && number.charAt(0) <= 90) {
                    System.out.printf("Seat decoded: %s%s%s%n", number.charAt(0), number.charAt(1), number.charAt(2));
                } else {
                    System.out.printf("Seat decoded: %s%s%s%n", number.charAt(3), number.charAt(1), number.charAt(2));
                }
            } else {
                System.out.printf("Seat decoded: %s%d%n", number.charAt(0), (int) number.charAt(1));
            }
        }
    }
}
