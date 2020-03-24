package Another;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.Scanner;

public class test {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner scanner = new Scanner(System.in);
        BufferedReader bufferedReader = new BufferedReader(new FileReader("a.txt"));
        System.out.println(bufferedReader);
    }
}
