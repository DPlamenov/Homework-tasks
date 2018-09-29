package com.company;

import java.util.Scanner;

public class RectangleArea {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


       int n = Integer.parseInt(scanner.nextLine());
       String dollars = "$";
       for(int i = 0;i <= n;i++){
            System.out.println(dollars.repeat(i));
       }

    }
}
