package SimpleOperationsandCalculationsExercise;

import java.util.Scanner;

public class TailoringWorkshop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int tables = Integer.parseInt(scanner.nextLine());
        double length = Double.parseDouble(scanner.nextLine());
        double width = Double.parseDouble(scanner.nextLine());

        double tablecloth = tables * (length + 2 * 0.30) * (width + 2 * 0.30);
        double kare = tables * (length /2 ) * (length /2);
        double usd = tablecloth * 7.00 + kare * 9.00;
        double bgn = usd * 1.85;
        System.out.printf("%.2f USD", usd);
        System.out.printf("%.2f BGN", bgn);
    }
}
