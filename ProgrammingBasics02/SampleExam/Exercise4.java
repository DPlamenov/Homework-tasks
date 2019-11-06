package SampleExam;

import java.util.Scanner;

public class Exercise4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int singer = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        double income = 0;
        double peoples = 0;

        while (!"The restaurant is full".equals(command)) {
            int p = Integer.parseInt(command);
            peoples += p;
            if (p < 5) {
                income += p * 100;
            } else {
                income += p * 70;
            }
            command = scanner.nextLine();
        }
        if(income >= singer){
            System.out.printf("You have %.0f guests and %.0f leva left.", peoples, income - singer);
        }else{
            System.out.printf("You have %.0f guests and %.0f leva income, but no singer.", peoples, income);
        }
    }
}
