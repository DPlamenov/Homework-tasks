package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class SeriesCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	Име на сериал - текст
        //•	Брой сезони – цяло число в диапазона [1… 10]
        //•	Брой епизоди  – цяло число в диапазона [10… 80]
        //•	Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]
        double total = 0;
        String name = scanner.nextLine();
        int seasons = Integer.parseInt(scanner.nextLine());
        int episodes = Integer.parseInt(scanner.nextLine());
        double episodeWithoutAds = Double.parseDouble(scanner.nextLine());

        double e = episodeWithoutAds * 1.20;
        total += e * seasons * episodes + (seasons * 10);
        System.out.printf("Total time needed to watch the %s series is %.0f minutes.", name, total);
    }
}
