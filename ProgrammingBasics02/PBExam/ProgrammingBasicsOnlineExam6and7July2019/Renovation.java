package PBExam.ProgrammingBasicsOnlineExam6and7July2019;

import java.util.Scanner;

public class Renovation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int height = Integer.parseInt(scanner.nextLine());
        int width = Integer.parseInt(scanner.nextLine());
        int percent = Integer.parseInt(scanner.nextLine());

        double area = height * width * 4;
        area *= 1 - (percent/100.0);
        String command;
        while (!"Tired!".equals(command = scanner.nextLine())) {
            int literPaint = Integer.parseInt(command);
            area -= literPaint;
            if(area <= 0){
                break;
            }
        }
        if(command.equals("Tired!")){
            System.out.printf("%.0f quadratic m left.", area);
        }else if(area == 0){
            System.out.println("All walls are painted! Great job, Pesho!");
        }else if (area < 0){
            System.out.printf("All walls are painted and you have %.0f l paint left!", Math.abs(area));
        }
    }
}
