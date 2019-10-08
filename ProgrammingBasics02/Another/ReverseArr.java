package Another;

import java.util.Scanner;

public class ReverseArr {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        String[] strings = input.split(" ");
        int[] nums = new int[strings.length];
        for (int i = 0; i < strings.length; i++) {
            nums[i] = Integer.parseInt(strings[i]);
        }
        for (int z = 0; z < nums.length / 2; z++) {
            int x = nums[nums.length - z - 1];
            nums[nums.length - z - 1] = nums[z];
            nums[z] = x;
        }
        for (int n : nums
        ) {
            System.out.println(n);
        }
    }
}
