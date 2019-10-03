package com.company.ConditionalStatementsLab;

import java.util.Scanner;

public class PasswordGuess {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String PASSWORD = "s3cr3t!P@ssw0rd";
        String user_password = scanner.nextLine();

        if (user_password.equals(PASSWORD)) {
            System.out.println("Welcome");
        } else {
            System.out.println("Wrong password!");
        }
    }
}
