package Another;

import java.util.Scanner;

public class Abs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String[] strings = input.split(" ");
        int[] nums = new int[strings.length];
        for (int i = 0; i < strings.length; i++) {
            if (Integer.parseInt(strings[i]) < 0) {
                nums[i] = Math.abs(Integer.parseInt(strings[i]));
            } else {
                nums[i] = Integer.parseInt(strings[i]);
                nums[i] -= nums[i] * 2;
            }
        }
        for (int n : nums
        ) {
            System.out.println(n);
        }
    }
}
