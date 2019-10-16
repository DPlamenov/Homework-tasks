package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int capacity = Integer.parseInt(scanner.nextLine());
        String command;
        boolean seats = true;
        double total = 0;
        while (!"Movie time!".equals(command = scanner.nextLine())) {
            double current = 0;
            int peoples = Integer.parseInt(command);

            current = peoples * 5;
            if (peoples % 3 == 0) {
                current -= 5;
            }
            capacity -= peoples;
            if(capacity < 0){
                seats = false;
                break;
            }

            total += current;

        }
        if(command.equals("Movie time!")){
            System.out.printf("There are %d seats left in the cinema.%n", capacity);
        }else{
            System.out.printf("The cinema is full.%n");
        }
        System.out.printf("Cinema income - %.0f lv.", total);
    }
}
