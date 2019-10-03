package ExamPreparation;

import java.util.Scanner;

public class ChristmasDecoration {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int budget = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        double left = budget;
        while (!"Stop".equals(command)){
            String object = command;
            int price = 0;
            object = object.toLowerCase();
            for (int i = 0; i < object.length() ; i++) {
                 if(!String.valueOf(object.charAt(i)).equals(" ")){
                     price += (int) object.charAt(i);
                 }
            }
            if(left >= price){
                left -= price;
                System.out.printf("Item successfully purchased!%n");
            }else {
                System.out.println("Not enough money!");
                break;
            }

            command = scanner.nextLine();
        }
        if(command.equals("Stop")){
            System.out.printf("Money left: %.0f", left);
        }

    }
}
