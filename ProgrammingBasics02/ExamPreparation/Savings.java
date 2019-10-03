package ExamPreparation;

import java.util.Scanner;

public class Savings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Първи ред – дохода на Деси за месец – реално число в интервала [1500.00… 10 000.00]
        //2. Втори ред – броят месеци, с които Деси разполага, за да спести парите – цяло число в интервала
        //[3... 12]
        //3. Трети ред – сумата, от която Деси има нужда, за да покрие личните си разходи – реално число
        //в интервала [300.00... 1000.00]
        double salary = Double.parseDouble(scanner.nextLine());
        int month = Integer.parseInt(scanner.nextLine());
        double needs = Double.parseDouble(scanner.nextLine());
        double more = 0.30 * salary;

        double eachMonth = salary - (needs + more);

        double total = eachMonth * month;
        System.out.printf("She can save %.2f%%%n", eachMonth/salary * 100.0);
        System.out.printf("%.2f", total);

    }
}
