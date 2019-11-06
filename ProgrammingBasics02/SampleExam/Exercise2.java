package SampleExam;

import java.util.Scanner;

public class Exercise2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //• На първия ред е широчината на кораба - реално число в интервала [1.00... 10.00]
        //• На втория ред е дължината на кораба - реално число в интервала [1.00…10.00]
        //• На третия ред е височината на кораба - реално число в интервала [1.00…20.00]
        //• На четвъртия ред е средната височина на астронавтите - реално число в интервала [1.50 … 1.90]
        double width = Double.parseDouble(scanner.nextLine());
        double length = Double.parseDouble(scanner.nextLine());
        double height = Double.parseDouble(scanner.nextLine());
        double averageSize = Double.parseDouble(scanner.nextLine());

        double totalVolume = width * length * height;
        double volume = 2 * 2 * (averageSize + 0.4);

        int a = (int) Math.floor(totalVolume / volume);

        if (a < 3) {
            System.out.println("The spacecraft is too small.");
        } else if (a > 10) {
            System.out.println("The spacecraft is too big.");
        }else{
            System.out.printf("The spacecraft holds %d astronauts.", a);
        }
    }
}
