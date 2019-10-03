package NestedConditionalStatementsExercise;

import java.util.Scanner;

public class OperationsBetweenNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //•	N1 – цяло число в интервала [0...40 000]
        //•	N2 – цяло число в интервала [0...40 000]
        //•	Оператор – един символ измеду: „+“, „-“, „*“, „/“, „%“
        int n1 = Integer.parseInt(scanner.nextLine());
        int n2 = Integer.parseInt(scanner.nextLine());
        String operator = scanner.nextLine();

        double result = 0;
        String evenOrOdd = "";
        if (operator.equalsIgnoreCase("+")) {
            result = n1 + n2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            System.out.printf("%d %s %d = %.0f - %s", n1, operator, n2, result, evenOrOdd);

        } else if (operator.equalsIgnoreCase("-")) {
            result = n1 - n2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            System.out.printf("%d %s %d = %.0f - %s", n1, operator, n2, result, evenOrOdd);
        } else if (operator.equalsIgnoreCase("*")) {
            result = n1 * n2;
            if (result % 2 == 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            System.out.printf("%d %s %d = %.0f - %s", n1, operator, n2, result, evenOrOdd);
        } else if (operator.equalsIgnoreCase("/")) {
            if (n2 != 0) {
                result = n1 * 1.0 / n2;
                System.out.printf("%d / %d = %.2f", n1, n2, result);
            } else {
                System.out.printf("Cannot divide %d by zero", n1);
            }

        } else if (operator.equalsIgnoreCase("%")) {
            if (n2 != 0) {
                result = n1 % n2;
                System.out.printf("%d %% %d = %.0f", n1, n2, result);
            } else {
                System.out.printf("Cannot divide %d by zero", n1);
            }

        }

    }
}
