package ForLoopLab;

import java.util.Scanner;

public class CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int yearsLily = Integer.parseInt(scanner.nextLine());
        double washingMachinePrice = Double.parseDouble(scanner.nextLine());
        int sellDollsFor = Integer.parseInt(scanner.nextLine());

        double totalSpend = 0;
        int dolls = 0;
        for (int i = 1; i <= yearsLily; i++) {
            if(i %2 == 0){
                totalSpend += 10 * i / 2.0;
                totalSpend -= 1;
            }else{
                dolls++;
            }
        }

        totalSpend += (dolls * sellDollsFor);

        if(totalSpend >= washingMachinePrice){
            System.out.printf("Yes! %.2f", Math.abs(totalSpend - washingMachinePrice));
        }else{
            System.out.printf("No! %.2f", Math.abs(totalSpend - washingMachinePrice));
        }
    }
}
