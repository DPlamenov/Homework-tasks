package ForLoopLab;

import java.util.Scanner;

public class OddEvenSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int odd = 0;
        int even = 0;
        for (int i = 1; i <= n ; i++) {
            if (i % 2 == 0) {
                even += Integer.parseInt(scanner.nextLine());
            } else {
                odd += Integer.parseInt(scanner.nextLine());
            }
        }
        if (odd == even) {
            System.out.println("Yes");
            System.out.printf("Sum = %d", odd);
        } else {
            System.out.println("No");
            System.out.printf("Diff = %d", Math.abs(odd - even));
        }

    }
}
