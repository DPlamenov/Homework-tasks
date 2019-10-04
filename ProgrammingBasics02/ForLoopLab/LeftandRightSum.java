package ForLoopLab;

import java.util.Scanner;

public class LeftandRightSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int left = 0;
        int right = 0;
        for (int i = 1; i <= n * 2; i++) {
            if (i <= n) {
                left += Integer.parseInt(scanner.nextLine());
            } else {
                right += Integer.parseInt(scanner.nextLine());
            }
        }
        if (left == right) {
            System.out.printf("Yes, sum = %d", left);
        } else {
            System.out.printf("No, diff = %d", Math.abs(left - right));
        }
    }
}
