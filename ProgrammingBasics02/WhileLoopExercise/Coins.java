package WhileLoopExercise;

import java.util.Scanner;

public class Coins {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double balance = Double.parseDouble(scanner.nextLine());
        balance = Math.round(balance * 100);
        int coins = 0;
        while (balance > 0) {
            if (balance >= 200) {
                balance -=200;
                coins++;
            } else if (balance >= 100) {
                balance -=100;
                coins++;
            } else if (balance >= 50) {
                balance -=50;
                coins++;
            } else if(balance >= 20){
                balance -=20;
                coins++;
            } else if (balance >= 10) {
                balance -=10;
                coins++;
            } else if(balance >= 5){
                balance -=5;
                coins++;
            } else if (balance >= 2) {
                balance -=2;
                coins++;
            } else if(balance >= 1){
                balance -=1;
                coins++;
            }


        }
        System.out.println(coins);
    }

}
