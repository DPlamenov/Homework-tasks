package NestedConditionalStatementsLab;

import java.util.Scanner;

public class PersonalTitles {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double years = Double.parseDouble(scanner.nextLine());
        String gender = scanner.nextLine();
        String address = "";
        if (gender.equals("m")) {
            if (years >= 16) {
                address = "Mr.";
            } else {
                address = "Master";
            }
        } else if (gender.equals("f")) {
            if (years >= 16) {
                address = "Ms.";
            } else {
                address = "Miss";
            }
        }
        System.out.println(address);
    }
}
