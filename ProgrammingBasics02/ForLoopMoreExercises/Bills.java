package ForLoopMoreExercises;

import java.util.Scanner;

public class Bills {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int months = Integer.parseInt(scanner.nextLine());
        double electricityTotal = 0;
        double waterTotal = 0;
        double internetTotal = 0;
        double otherTotal = 0;
        double average = 0;
        for (int i = 1; i <= months; i++) {
            double priceForElectricity = Double.parseDouble(scanner.nextLine());
            waterTotal += 20;
            internetTotal += 15;
            otherTotal += (priceForElectricity + 20 + 15) * 1.2;
            electricityTotal += priceForElectricity;
        }
        average += electricityTotal + internetTotal + waterTotal + otherTotal;
        System.out.printf("Electricity: %.2f lv%n", electricityTotal);
        System.out.printf("Water: %.2f lv%n", waterTotal);
        System.out.printf("Internet: %.2f lv%n", internetTotal);
        System.out.printf("Other: %.2f lv%n", otherTotal);
        System.out.printf("Average: %.2f lv%n", average / months);
    }
}
