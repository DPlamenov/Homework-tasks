package ForLoopExercise;

import java.util.Scanner;

public class SalaryWhile {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int openTabsInBrowser = Integer.parseInt(scanner.nextLine());
        int salary = Integer.parseInt(scanner.nextLine());
        int n = 1;
        boolean lostSalary = false;
        while (n <= openTabsInBrowser) {
            String openSite = scanner.nextLine().toLowerCase();
            switch (openSite) {
                case "facebook":
                    salary -= 150;
                    break;
                case "instagram":
                    salary -= 100;
                    break;
                case "reddit":
                    salary -= 50;
                    break;
            }
            if (salary <= 0) {
                System.out.println("You have lost your salary.");
                lostSalary = true;
                break;
            }
            n++;
        }
        if (!lostSalary) {
            System.out.printf("%d", salary);
        }

    }
}
