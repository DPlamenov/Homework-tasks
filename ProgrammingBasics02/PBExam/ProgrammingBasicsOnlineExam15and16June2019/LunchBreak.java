package PBExam.ProgrammingBasicsOnlineExam15and16June2019;

import java.util.Scanner;

public class LunchBreak {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //1. Име на сериал – текст
        //2. Продължителност на епизод – цяло число в диапазона [10… 90]
        //3. Продължителност на почивката – цяло число в диапазона [10… 120]
        String movieName = scanner.nextLine();
        int episodeLength = Integer.parseInt(scanner.nextLine());
        int breakLength = Integer.parseInt(scanner.nextLine());

        double forLunch = breakLength * (1.0 / 8);
        double forBreak = breakLength * (1.0 / 4);
        double leftTime = breakLength - forBreak - forLunch;
        if(leftTime >= episodeLength){
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", movieName, Math.ceil(leftTime - episodeLength));
        }else{
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", movieName, Math.ceil(episodeLength -leftTime ));
        }


    }
}
