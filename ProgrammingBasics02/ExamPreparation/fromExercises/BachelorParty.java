package ExamPreparation.fromExercises;

import java.util.Scanner;

public class BachelorParty {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Сумата предвидена за гост изпълнителя - цяло число в интервала [1… 4500]
        //• На всеки следващ ред (до получаване на команда "The restaurant is full") - броят на хората
        //във всяка група.
        int forSinger = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        int save = 0;
        int guest = 0;
        while (!"The restaurant is full".equals(command)){
            int peopleInGroup = Integer.parseInt(command);
            guest += peopleInGroup;
            if(peopleInGroup < 5){
                save += (peopleInGroup * 100);
            }else{
                save += (peopleInGroup * 70);
            }

            command = scanner.nextLine();
        }
        if(save >= forSinger){
            System.out.printf("You have %d guests and %d leva left.", guest, save - forSinger);
        }else{
            System.out.printf("You have %d guests and %d leva income, but no singer.", guest, save);
        }
    }
}
