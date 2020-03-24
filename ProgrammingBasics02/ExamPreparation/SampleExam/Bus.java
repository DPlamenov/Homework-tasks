package ExamPreparation.SampleExam;

import java.util.Scanner;

public class Bus {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int start = Integer.parseInt(scanner.nextLine());
        int stops = Integer.parseInt(scanner.nextLine());
        for (int i = 1; i <= stops; i++) {
            int exit = Integer.parseInt(scanner.nextLine());
            int enter = Integer.parseInt(scanner.nextLine());
            start += enter;
            start -= exit;
            if (i %2 == 0){
                start -= 2;
            }else {
                start += 2;
            }
        }
        System.out.printf("The final number of passengers is : %d", start);
    }
}
