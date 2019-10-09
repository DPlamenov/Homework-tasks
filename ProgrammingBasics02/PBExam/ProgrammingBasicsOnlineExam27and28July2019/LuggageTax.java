package PBExam.ProgrammingBasicsOnlineExam27and28July2019;

import java.util.Scanner;

public class LuggageTax {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Първи ред – ширина на куфара – цяло число в интервала от [1… 10]
        //2. Втори ред – височина на куфара – цяло число в интервала от [1… 10]
        //3. Трети ред – дълбочина на куфара – цяло число в интервала от [1… 10]
        //4. Четвърти ред – дали билета ѝ е priority или не – текст с възможности "true" или "false"
        int width = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        int depth = Integer.parseInt(scanner.nextLine());
        String priority = scanner.nextLine();
        double total = 0;
        double volume = width * height * depth;
        switch (priority) {
            case "true":
                if (volume > 100 && volume <= 200) {
                    total = 10;
                } else if (volume > 200 && volume <= 300) {
                    total = 20;
                }
                break;
            case "false":
                if (volume > 50 && volume <= 100) {
                    total = 25;
                } else if (volume > 100 && volume <= 200) {
                    total = 50;
                } else if (volume > 200 && volume <= 300) {
                    total = 100;
                }
                break;
        }
        System.out.printf("Luggage tax: %.2f", total);
    }
}
