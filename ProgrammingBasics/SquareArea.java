package com.company;

import java.util.Scanner;

public class SquareArea {

    public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);
         System.out.println("a = ");
         Double a = Double.parseDouble(scanner.nextLine());
         Double area = a * a;

         System.out.print("Square = ");
         System.out.println(area);



    }
}
