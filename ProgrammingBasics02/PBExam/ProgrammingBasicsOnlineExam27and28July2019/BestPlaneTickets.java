package PBExam.ProgrammingBasicsOnlineExam27and28July2019;

import java.util.Scanner;

public class BestPlaneTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command = scanner.nextLine();
        int maxMinutes = Integer.MAX_VALUE;
        String max = "";
        double cost = 0;
        while (!command.equals("End")){
            String ticket = command;
            double price = Double.parseDouble(scanner.nextLine());
            int minutes = Integer.parseInt(scanner.nextLine());
            if(minutes < maxMinutes){
                maxMinutes = minutes;
                max = ticket;
                cost = price * 1.96;
            }

            command = scanner.nextLine();
        }

        System.out.printf("Ticket found for flight %s costs %.2f leva with %dh %dm stay", max, cost, maxMinutes / 60, maxMinutes % 60);
    }
}
