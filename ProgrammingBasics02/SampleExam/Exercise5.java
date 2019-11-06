package SampleExam;

import java.util.Scanner;

public class Exercise5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int startPeople = Integer.parseInt(scanner.nextLine());
        int stops = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= stops; i++) {
            int left = Integer.parseInt(scanner.nextLine());
            int enter = Integer.parseInt(scanner.nextLine());
            startPeople -= left;
            startPeople += enter;
            if(i %2 ==0){
                startPeople -= 2;
            }else{
                startPeople += 2;
            }
        }
        System.out.printf("The final number of passengers is : %d", startPeople);
    }
}
