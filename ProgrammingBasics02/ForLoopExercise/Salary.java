package ForLoopExercise;

import java.util.Scanner;

public class Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //•	Брой отворени табове в браузъра n - цяло число в интервала [1...10]
        //•	Заплата - число в интервала [700...1500]
        int openTabsInBrowser = Integer.parseInt(scanner.nextLine());
        int salary = Integer.parseInt(scanner.nextLine());
        boolean lostSalary = false;
        for (int i = 1; i <= openTabsInBrowser; i++) {
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
        }
        if(!lostSalary){
            System.out.printf("%d", salary);
        }
    }
}
