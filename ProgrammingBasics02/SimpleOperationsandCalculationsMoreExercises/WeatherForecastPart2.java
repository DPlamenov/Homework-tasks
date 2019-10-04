package SimpleOperationsandCalculationsMoreExercises;

import java.util.Scanner;

public class WeatherForecastPart2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double temperature = Double.parseDouble(scanner.nextLine());
        if (temperature >= 26.00 && temperature <= 35.00) {
            System.out.println("Hot");
        } else if (temperature >= 20.10 && temperature <= 25.90) {
            System.out.println("Warm");
        } else if (temperature >= 15.00 && temperature <= 20.00) {
            System.out.println("Mild");
        } else if (temperature >= 12.00 && temperature <= 14.90) {
            System.out.println("Cool");
        } else if (temperature >= 5.00 && temperature <= 11.9) {
            System.out.println("Cold");
        } else {
            System.out.println("unknown");
        }
    }
}