package ForLoopMoreExercises;

import java.util.Scanner;

public class BackToThePast {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	Наследените пари – реално число в интервала [1.00 ... 1 000 000.00]
        //•	Годината, до която трябва да живее (включително) – цяло число в интервала [1801 ... 1900]
        double inheritMoney = Double.parseDouble(scanner.nextLine());
        double needMoney = 0;
        int years = 18;
        int yearToLife = Integer.parseInt(scanner.nextLine());
        for (int i = 1800; i <= yearToLife; i++) {
            if (i % 2 == 0) {
                needMoney += 12000;
            } else {
                needMoney += 12000 + years * 50;
            }
            years++;
        }
        inheritMoney -= needMoney;
        if(inheritMoney >= 0){
            System.out.printf("Yes! He will live a carefree life and will have %.2f dollars left.", inheritMoney);
        }else{
            System.out.printf("He will need %.2f dollars to survive.", Math.abs(inheritMoney));
        }
        //ystem.out.println(needMoney);
    }

}
