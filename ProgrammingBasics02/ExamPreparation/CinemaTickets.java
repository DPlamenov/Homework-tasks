package ExamPreparation;

import java.util.Scanner;

public class CinemaTickets {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;
        String command2;
        double totalTicket = 0;
        double studentTicket = 0;
        double standardTicket = 0;
        double kidTicket = 0;
        while (!"Finish".equalsIgnoreCase(command = scanner.nextLine())) {
            double soldTicketForMovie = 0;
            int freeSeats = Integer.parseInt(scanner.nextLine()); // 10
            while (!"End".equalsIgnoreCase(command2 = scanner.nextLine())) { //
                switch (command2) {
                    case "student":
                        soldTicketForMovie++;
                        studentTicket++;
                        break;
                    case "standard":
                        soldTicketForMovie++;
                        standardTicket++;
                        break;
                    case "kid":
                        soldTicketForMovie++;
                        kidTicket++;
                        break;
                }

                if (freeSeats <= soldTicketForMovie) {
                    break;
                }
            }
            totalTicket += soldTicketForMovie;
            System.out.printf("%s - %.2f%% full.%n", command, soldTicketForMovie / freeSeats * 100.0);

        }
        System.out.printf("Total tickets: %.0f%n", totalTicket);
        System.out.printf("%.2f%% student tickets.%n", studentTicket / totalTicket * 100.0);
        System.out.printf("%.2f%% standard tickets.%n", standardTicket / totalTicket * 100.0);
        System.out.printf("%.2f%% kids tickets.%n", kidTicket / totalTicket * 100.0);

    }
}
