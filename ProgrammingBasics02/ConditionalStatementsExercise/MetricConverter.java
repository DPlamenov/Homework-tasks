package ConditionalStatementsExercise;

import java.util.Scanner;

public class MetricConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double n = Double.parseDouble(scanner.nextLine());
        String input = scanner.nextLine();
        String output = scanner.nextLine();

        double result = 0;


        if (input.equals("mm") && output.equals("cm")) {
            result = n / 10;
        } else if (input.equals("mm") && output.equals("m")) {
            result = n / 1000;
        } else if (input.equals("cm") && output.equals("mm")) {
            result = n * 10;
        } else if (input.equals("cm") && output.equals("m")) {
            result = n / 100;
        } else if (input.equals("m") && output.equals("mm")){
            result = n * 1000;
        }else if(input.equals("m") && output.equals("cm")){
            result = n * 100;
        }
        System.out.println(String.format("%.3f", result));
    }
}
