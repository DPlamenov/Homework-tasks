import java.util.Scanner;

public class TailoringWorkshop {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int table = Integer.parseInt(scanner.nextLine());
        double length = Double.parseDouble(scanner.nextLine());
        double width = Double.parseDouble(scanner.nextLine());

        double tablecloths = table * (length
                 + 2 * 0.3) * (width + 2 * 0.3);
        double kare = table * (length
                / 2) * (length / 2);


        double usd = tablecloths * 7 + kare * 9;
        double bgn = dolars * 1.85;
        System.out.printf("%.2f USD%n",usd);
        System.out.printf("%.2f BGN",bgn);

    }
}
