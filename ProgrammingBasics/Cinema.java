package pb.homework;

import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int capacity = Integer.parseInt(scanner.nextLine());
        String command;
        int seats = capacity;
        double income = 0;
        while(!"Movie time!".equals(command = scanner.nextLine())){
            int people = Integer.parseInt(command);
            if(seats - people < 0){
                System.out.println("The cinema is full.");
                break;
            }
            double current = 5.00 * people;
            if(people %3 == 0){
                current -= 5;
            }
            seats -= people;
            income += current;
        }
        if(command.equals("Movie time!")){
            System.out.printf("There are %d seats left in the cinema.%n", seats);
        }
        System.out.printf("Cinema income - %.0f lv.",income);

    }
}
