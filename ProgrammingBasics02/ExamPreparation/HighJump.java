package ExamPreparation;

import java.util.Scanner;

public class HighJump {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int wanted = Integer.parseInt(scanner.nextLine());
        int start_from = wanted - 30;
        double letva_ = 0;
        int succeeded = 0;
        int fail = 0;
        int total_jump = 0;
        while (true){
            int jump = Integer.parseInt(scanner.nextLine());
            double letva = start_from + letva_;
            if(jump > letva){
                succeeded++;
                fail = 0;
                letva_ += 5;
            }else{
                fail++;
            }
            total_jump++;
            if(fail == 3){
                System.out.printf("Tihomir failed at %.0fcm after %d jumps.", letva, total_jump);
                break;
            }
            if(jump > wanted){
                System.out.printf("Tihomir succeeded, he jumped over %dcm after %d jumps.", wanted, total_jump);
                break;
            }
        }
    }
}
