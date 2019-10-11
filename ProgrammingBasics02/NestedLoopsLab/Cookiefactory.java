package NestedLoopsLab;

import java.util.Scanner;

public class Cookiefactory {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= n; i++) {
            String command = scanner.nextLine();
            boolean isFlour = false;
            boolean isEggs = false;
            boolean isSugar = false;
            while (true) {
                switch (command) {
                    case "flour":
                        isFlour = true;
                        break;
                    case "eggs":
                        isEggs = true;
                        break;
                    case "sugar":
                        isSugar = true;
                        break;


                }
                if (command.equals("Bake!")) {
                    if ((isEggs && isFlour && isSugar)) {
                        System.out.printf("Baking batch number %d...%n", i);
                        break;
                    } else {
                        System.out.println("The batter should contain flour, eggs and sugar!");
                    }

                }
                command = scanner.nextLine();
            }

        }
    }
}
