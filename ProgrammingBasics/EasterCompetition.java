package pb.homework;

import java.util.Scanner;

public class EasterCompetition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int easter_bread = Integer.parseInt(scanner.nextLine());

        String winner_name = "";
        int winner_point = 0;

        for (int i = 1; i <= easter_bread; i++) {
            String baker = scanner.nextLine();
            String command = "";
            int baker_point = 0;
            while(!"Stop".equals(command = scanner.nextLine())){
                int point = Integer.parseInt(command);
                baker_point += point;
            }
            System.out.printf("%s has %d points.%n", baker, baker_point);
            if(baker_point > winner_point){
                System.out.printf("%s is the new number 1!%n", baker);
                winner_point = baker_point;
                winner_name = baker;
            }
        }
        System.out.printf("%s won competition with %d points!", winner_name, winner_point);

    }
}
