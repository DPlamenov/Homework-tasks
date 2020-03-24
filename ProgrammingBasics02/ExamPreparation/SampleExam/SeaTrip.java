package ExamPreparation.SampleExam;

import java.util.Scanner;

public class SeaTrip {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double food = Double.parseDouble(scanner.nextLine());
        double souvenirs = Double.parseDouble(scanner.nextLine());
        double hotel = Double.parseDouble(scanner.nextLine());

        double needGasoline = 420 / 100.0 * 7;
        double gasolinePrice = needGasoline * 1.85;

        double foodPrice = (3 * souvenirs) + (3 * food);
        double hotel1 = 0.90 * hotel;
        double hotel2 = 0.85 * hotel;
        double hotel3 = 0.80 * hotel;


        double total = gasolinePrice + foodPrice + hotel1 + hotel2 + hotel3;
        System.out.printf("Money needed: %.2f", total);
    }
}
