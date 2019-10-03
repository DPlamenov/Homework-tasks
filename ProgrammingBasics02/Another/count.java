package Another;

import java.util.Scanner;

public class count {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String streamOfLetter = scanner.nextLine();
        char[] arr = new char[streamOfLetter.length()];
        for (int i = 0; i < streamOfLetter.length() ; i++) {
            arr[i] += streamOfLetter.indexOf(i);
        }

        for (char s:
             arr) {
            System.out.println(s);
        }
    }
}
