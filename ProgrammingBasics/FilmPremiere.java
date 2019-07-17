package pb.homework;
import java.util.Scanner;

public class FilmPremiere{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String movie = scanner.nextLine();
        String packet = scanner.nextLine();
        int ticket_count = Integer.parseInt(scanner.nextLine());

        double total = 0;
        switch (movie){
            case "John Wick":
                if(packet.equals("Drink")){
                    total = ticket_count * 12.00;
                }else if(packet.equals("Popcorn")){
                    total = ticket_count * 15.00;
                }else if(packet.equals("Menu")){
                    total = ticket_count * 19.00;
                }
                break;
            case "Star Wars":
                if(packet.equals("Drink")){
                    total = ticket_count * 18.00;
                }else if(packet.equals("Popcorn")){
                    total = ticket_count * 25.00;
                }else if(packet.equals("Menu")){
                    total = ticket_count * 30.00;
                }
                break;
            case "Jumanji":
                if(packet.equals("Drink")){
                    total = ticket_count * 9.00;
                }else if(packet.equals("Popcorn")){
                    total = ticket_count * 11.00;
                }else if(packet.equals("Menu")){
                    total = ticket_count * 14.00;
                }
                break;
        }
        if(movie.equals("Star Wars") && ticket_count >= 4){
            double discount = total * 0.30;
            total -= discount;
        }else if(movie.equals("Jumanji") && ticket_count == 2){
            double discount = total * 0.15;
            total -= discount;
        }
        System.out.printf("Your bill is %.2f leva.", total);
    }
}
