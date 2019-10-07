package ForLoopExercise;

import java.util.Scanner;

public class EqualPairs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int maxDiff = 0;
        int prevSum = 0;
        int sum = 0;
        int diff = 0;
        for (int i = 1; i <= n; i++) {
            int n1 = Integer.parseInt(scanner.nextLine());
            int n2 = Integer.parseInt(scanner.nextLine());
            sum = n1 + n2;
            if(i > 1){
                diff = Math.abs(sum - prevSum);
            }
            if (diff > maxDiff) {
                maxDiff = diff;
            }
            prevSum = sum;
            sum = 0;

        }

        if (maxDiff == 0) {
            System.out.printf("Yes, value = %d", prevSum);
        } else {
            System.out.printf("No, diff = %d", maxDiff);
        }

    }
}
