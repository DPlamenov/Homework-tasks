package ForLoopExercise;

import java.util.Scanner;

public class Histogram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        double p1 = 0;
        double p2 = 0;
        double p3 = 0;
        double p4 = 0;
        double p5 = 0;
        for (int i = 1; i <= n; i++) {
            int currentInt = Integer.parseInt(scanner.nextLine());
            if(currentInt < 200){
                p1++;
            }else if(currentInt >= 200 && currentInt < 400){
                p2++;
            }else if(currentInt >= 400 && currentInt < 600){
                p3++;
            }else if(currentInt >= 600 && currentInt < 800){
                p4++;
            }else{
                p5++;
            }
        }
        p1 /= n;
        p2 /= n;
        p3 /= n;
        p4 /= n;
        p5 /= n;

        p1 *= 100;
        p2 *= 100;
        p3 *= 100;
        p4 *= 100;
        p5 *= 100;
        System.out.printf("%.2f%%%n", p1);
        System.out.printf("%.2f%%%n", p2);
        System.out.printf("%.2f%%%n", p3);
        System.out.printf("%.2f%%%n", p4);
        System.out.printf("%.2f%%", p5);
    }
}
