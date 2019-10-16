package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class MovieDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Време за снимки – цяло число в диапазона [0… 1440]
        //2. Брой сцени – цяло число в диапазона [5… 25]
        //3. Времетраене на сцена – цяло число в диапазона [20… 90]
        int photos = Integer.parseInt(scanner.nextLine());
        int scenes = Integer.parseInt(scanner.nextLine());
        int scenesTime = Integer.parseInt(scanner.nextLine());

        double total = 0.15 * photos;
        total += (scenes*  scenesTime);
        if (total <= photos) {
            System.out.printf("You managed to finish the movie on time! You have %.0f minutes left!", photos - total);
        } else {
            System.out.printf("Time is up! To complete the movie you need %.0f minutes.", total - photos);
        }
    }
}
