package ConditionalStatementsExercise;

import java.util.Scanner;

public class WorldSwimmingRecord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double worldRecord = Double.parseDouble(scanner.nextLine());
        double distance = Double.parseDouble(scanner.nextLine());
        double timeForSwimOneMeters = Double.parseDouble(scanner.nextLine());

        double need = distance * timeForSwimOneMeters;
        double add = Math.floor(distance / 15) * 12.5;
        double totalTime = need + add;

        if(totalTime < worldRecord){
            System.out.println(String.format("Yes, he succeeded! The new world record is %.2f seconds.", totalTime));
        }else {
            System.out.println(String.format("No, he failed! He was %.2f seconds slower.", Math.abs(worldRecord - totalTime)));
        }
    }
}
