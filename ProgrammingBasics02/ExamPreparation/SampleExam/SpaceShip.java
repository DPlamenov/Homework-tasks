package ExamPreparation.SampleExam;

import java.util.Scanner;

public class SpaceShip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double width = Double.parseDouble(scanner.nextLine());
        double length = Double.parseDouble(scanner.nextLine());
        double height = Double.parseDouble(scanner.nextLine());
        double averageHeight = Double.parseDouble(scanner.nextLine());

        double volume = width * length * height;
        double need = 2 * 2 * (averageHeight + 0.40);
        double total = Math.floor(volume / need);

        if (total > 3 && total < 10) {
            System.out.printf("The spacecraft holds %.0f astronauts.", total);
        } else if (total < 3) {
            System.out.println("The spacecraft is too small.");
        } else if (total > 10) {
            System.out.println("The spacecraft is too big.");
        }
    }
}
