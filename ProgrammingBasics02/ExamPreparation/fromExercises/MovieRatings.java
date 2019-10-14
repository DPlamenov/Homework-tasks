package ExamPreparation.fromExercises;

import java.util.Scanner;

public class MovieRatings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int moviesCount = Integer.parseInt(scanner.nextLine());

        double highestRating = 0;
        double lowestRating = 10;
        String highestMovie = "";
        String lowestMovie = "";
        double totalRating = 0;

        for (int i = 1; i <= moviesCount ; i++) {
            String movieName = scanner.nextLine();
            double rating = Double.parseDouble(scanner.nextLine());
            totalRating += rating;
            if(rating > highestRating){
                highestMovie = movieName;
                highestRating = rating;
            }
            if(rating < lowestRating){
                lowestMovie = movieName;
                lowestRating = rating;
            }
        }
        System.out.printf("%s is with highest rating: %.1f%n", highestMovie, highestRating);
        System.out.printf("%s is with lowest rating: %.1f%n", lowestMovie, lowestRating);
        double average = totalRating / moviesCount;
        System.out.printf("Average rating: %.1f", average);
    }
}
