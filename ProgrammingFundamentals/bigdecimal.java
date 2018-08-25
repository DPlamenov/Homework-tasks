import java.math.BigDecimal;
import java.util.Scanner;

public class bigdecimal {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        BigDecimal bigDecimal = new BigDecimal(a);
        System.out.println(bigDecimal.add(new BigDecimal(b)));
    }
}
