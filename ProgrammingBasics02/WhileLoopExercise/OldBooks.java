package WhileLoopExercise;

import java.util.Scanner;

public class OldBooks {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String book = scanner.nextLine();
        int books = Integer.parseInt(scanner.nextLine());
        int i = 0;
        boolean isValid = false;
        while (i < books){
            String currentBook = scanner.nextLine();
            if(currentBook.equalsIgnoreCase(book)){
                System.out.printf("You checked %d books and found it.", i);
                isValid = true;
                break;
            }
            i++;
        }
        if(!isValid){
            System.out.println("The book you search is not here!");
            System.out.printf("You checked %d books.", i);
        }
    }
}
