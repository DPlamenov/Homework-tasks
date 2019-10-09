package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class Repainting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int nylon = Integer.parseInt(scanner.nextLine());
        int paint = Integer.parseInt(scanner.nextLine());
        int diluent = Integer.parseInt(scanner.nextLine());
        int needHours = Integer.parseInt(scanner.nextLine());

        double total = (1.10 * paint) * 14.50;
        total += (nylon + 2) * 1.50;
        total += 0.40;
        total += diluent * 5.00;
        total += (total * 0.3) * needHours;
        System.out.printf("Total expenses: %.2f lv.", total);
    }
}
