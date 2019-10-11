package NestedLoopsLab;

import java.util.Scanner;

public class Building {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int floors = Integer.parseInt(scanner.nextLine());
        int roomPerFloors = Integer.parseInt(scanner.nextLine());

        for (int i = floors; i >= 1; i--) {
            for (int j = 1; j <= roomPerFloors; j++) {
                if (i == floors) {
                    System.out.printf("L%d%d ", i, j - 1);
                } else if (i %2 ==0) {
                    System.out.printf("O%d%d ", i, j - 1);
                }else{
                    System.out.printf("A%d%d ", i, j - 1);


                }
            }
            System.out.println();

        }
    }
}
