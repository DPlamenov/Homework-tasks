package Another;

import java.util.Scanner;

public class DoubleChar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        for (int i = 0; i < str.length() ; i++) {
            System.out.print(String.valueOf(str.charAt(i)).repeat(2));
        }
    }
}
