package WhileLoopExercise;

import java.util.Scanner;

public class Cake {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());

        String command = scanner.nextLine();

        int total = width * length;
        int left = total;
        while (!"STOP".equalsIgnoreCase(command)){
            int piecesOfCake = Integer.parseInt(command);
            //   System.out.println(1);
            left -= piecesOfCake;
            if(left < 0){
                System.out.printf("No more cake left! You need %d pieces more.", Math.abs(left));
                break;
            }
            command = scanner.nextLine();
        }

        if(command.equalsIgnoreCase("STOP")){
            System.out.printf("%d pieces are left.",left);
        }
    }
}
