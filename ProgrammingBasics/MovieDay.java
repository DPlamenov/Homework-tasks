package pb.homework;

import java.util.Scanner;

public class MovieDay{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int photo_time = Integer.parseInt(scanner.nextLine());
        int scene = Integer.parseInt(scanner.nextLine());
        int scene_time = Integer.parseInt(scanner.nextLine());

        double total = photo_time * 0.15 + scene * scene_time;
        if(photo_time >= total){
            System.out.printf("You managed to finish the movie on time! You have %.0f minutes left!", photo_time - total);
        }else{
            System.out.printf("Time is up! To complete the movie you need %.0f minutes.", Math.abs(photo_time - total));
        }
    }
}
