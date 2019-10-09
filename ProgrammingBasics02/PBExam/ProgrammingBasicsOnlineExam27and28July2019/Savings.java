package PBExam.ProgrammingBasicsOnlineExam27and28July2019;

import java.util.Scanner;

public class Savings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double salary = Double.parseDouble(scanner.nextLine());
        int month = Integer.parseInt(scanner.nextLine());
        double needs = Double.parseDouble(scanner.nextLine());

        double forHer = 0.3 * salary;
        double eachMonth = salary - (needs + forHer);

        double totalSave = eachMonth * month;
        double percent = eachMonth / salary * 100;

        System.out.printf("She can save %.2f%%%n", percent);
        System.out.printf("%.2f", totalSave);

    }
}
