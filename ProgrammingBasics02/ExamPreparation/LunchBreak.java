package ExamPreparation;

import java.util.Scanner;

public class LunchBreak {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String movieName = scanner.nextLine();
        int episodeLength = Integer.parseInt(scanner.nextLine());
        int breakLength = Integer.parseInt(scanner.nextLine());

        double forLunch = (1 / 8.0) * breakLength;
        double reallyBreak = (1 / 4.0) * breakLength;

        double forMovie = breakLength - forLunch - reallyBreak;
        if (forMovie >= episodeLength) {
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", movieName, Math.ceil(forMovie - episodeLength));
        } else {
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", movieName, Math.ceil(episodeLength - forMovie));
        }
    }
}
