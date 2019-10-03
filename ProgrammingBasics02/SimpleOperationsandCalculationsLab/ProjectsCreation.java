package com.company.SimpleOperationsandCalculationsLab;

import java.util.Scanner;

public class ProjectsCreation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();
        int project = scanner.nextInt();
        System.out.printf("The architect %s will need %d hours to complete %d project/s.", name, project * 3, project);
    }
}
