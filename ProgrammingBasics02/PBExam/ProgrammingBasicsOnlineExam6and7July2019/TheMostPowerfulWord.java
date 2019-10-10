package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class TheMostPowerfulWord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String command;
        String powerfulWord = "";
        int powerful = 0;
        while (!"End of words".equals(command = scanner.nextLine())) {
            int word = 0;
            for (int i = 0; i < command.length(); i++) {
                word += command.charAt(i);

            }
            String c = String.valueOf(command.charAt(0)).toLowerCase();
            if (c.equals("a") || c.equals("e") || c.equals("i") || c.equals("o") || c.equals("u")
                    || c.equals("y")) {
                word *= command.length();
            } else {
                word /= command.length();
                word = (int) Math.floor(word);
            }

            if (word > powerful) {
                powerful = word;
                powerfulWord = command;
            }
        }
        System.out.printf("The most powerful word is %s - %d", powerfulWord, powerful);
    }
}
