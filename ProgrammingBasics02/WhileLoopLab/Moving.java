package WhileLoopLab;

import java.util.Scanner;

public class Moving {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int width = Integer.parseInt(scanner.nextLine());
        int length = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());

        int freeSpace = width * length * height;
        String command = scanner.nextLine();
        while (!command.equalsIgnoreCase("Done")){
            int boxes = Integer.parseInt(command);
            freeSpace -= boxes;
            if(freeSpace <= 0){
                System.out.printf("No more free space! You need %d Cubic meters more.", Math.abs(freeSpace));
                break;
            }
            command = scanner.nextLine();
        }
        if(command.equalsIgnoreCase("Done")){
            System.out.printf("%d Cubic meters left.", freeSpace);
        }
    }
}
