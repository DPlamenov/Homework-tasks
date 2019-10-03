package ConditionalStatementsLab;
import java.util.Scanner;

public class AreaofFigures {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String figure_type = scanner.nextLine();
        double result = 0;
        if(figure_type.equals("square")){
            double square_a = Double.parseDouble(scanner.nextLine());
            result = Math.pow(square_a, 2);
        }else if(figure_type.equals("rectangle")){
            double rectangle_a = Double.parseDouble(scanner.nextLine());
            double rectangle_b = Double.parseDouble(scanner.nextLine());
            result = rectangle_a * rectangle_b;
        }else if(figure_type.equals("circle")){
            double circle_r = Double.parseDouble(scanner.nextLine());
            result = Math.PI * Math.pow(circle_r, 2);
        }else if (figure_type.equals("triangle")){
            double triangle_a = Double.parseDouble(scanner.nextLine());
            double triangle_h = Double.parseDouble(scanner.nextLine());
            result = (triangle_a * triangle_h) / 2;
        }
        System.out.println(String.format("%.3f", result));
    }
}