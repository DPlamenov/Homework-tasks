package ExamPreparation.SampleExam;

import java.util.Scanner;

public class BachelorParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int singerPrice = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        int people = 0;
        double total = 0;
        while (!"The restaurant is full".equals(command)) {
            int group = Integer.parseInt(command);
            if (group < 5) {
                total += group * 100;
            } else {
                total += group * 70;
            }
            people += group;
            command = scanner.nextLine();
        }
        if(total >= singerPrice){
            System.out.printf("You have %d guests and %.0f leva left.", people, total - singerPrice);
        }else{
            System.out.printf("You have %d guests and %.0f leva income, but no singer.", people, total);
        }
    }
}
