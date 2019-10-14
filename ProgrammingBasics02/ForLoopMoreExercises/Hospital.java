package ForLoopMoreExercises;

import java.util.Scanner;

public class Hospital {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int doctors = 7;
        int treated = 0;
        int unTreated = 0;
        for (int i = 1; i <= days; i++) {
            if (i % 3 == 0) {
                if(treated < unTreated){
                    doctors++;
                }
            }
            int currentPatients = Integer.parseInt(scanner.nextLine()); // 7
            if(currentPatients >= doctors){ // true
                treated += doctors; // 7
                currentPatients -= doctors;
                unTreated += currentPatients;
            }else {
                treated += currentPatients;
            }
        }
        System.out.printf("Treated patients: %d%n", treated);
        System.out.printf("Untreated patients: %d", unTreated);
    }
}
