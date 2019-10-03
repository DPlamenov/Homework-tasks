package NestedConditionalStatementsMoreExercises;

import java.util.Scanner;

public class SchoolCamp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //1.	Сезонът – текст - “Winter”, “Spring” или “Summer”;
        //2.	Видът на групата – текст - “boys”, “girls” или “mixed”;
        //3.	Брой на учениците – цяло число в интервала [1 … 10000];
        //4.	Брой на нощувките – цяло число в интервала [1 … 100].
        String season = scanner.nextLine();
        String typeGroup = scanner.nextLine();
        int students = Integer.parseInt(scanner.nextLine());
        int night = Integer.parseInt(scanner.nextLine());

        double pricePerNight = 0;

        //	                Зимна ваканция	        Пролетна ваканция	Лятна ваканция
        //момчета/момичета	9.60	                    7.20	            15
        //смесена група	    10	                        9.50	            20

        switch (typeGroup) {
            case "boys":
            case "girls":
                if (season.equalsIgnoreCase("Winter")) {
                    pricePerNight = 9.60;
                } else if (season.equalsIgnoreCase("Spring")) {
                    pricePerNight = 7.20;
                } else if (season.equalsIgnoreCase("Summer")) {
                    pricePerNight = 15.00;
                }
                break;
            case "mixed":
                if (season.equalsIgnoreCase("Winter")) {
                    pricePerNight = 10.00;
                } else if (season.equalsIgnoreCase("Spring")) {
                    pricePerNight = 9.50;
                } else if (season.equalsIgnoreCase("Summer")) {
                    pricePerNight = 20.00;
                }
                break;
        }


        double total = pricePerNight * night * students;
        //Училището получава отстъпка от крайната цена, в зависимост от броя на настанените в хотела ученици:

        if(students >= 10 && students < 20){
            total *= 0.95;
            //•	Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
        }else if(students >= 20 && students < 50){
            total *= 0.85;
            //•	Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
        }else if(students >= 50){
            total *= 0.50;
            //•	Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
        }
        String sports = "";

        if(typeGroup.equalsIgnoreCase("girls")){
            if(season.equalsIgnoreCase("winter")){
                sports = "Gymnastics";
            }else if(season.equalsIgnoreCase("spring")){
                sports = "Athletics";
            }else if(season.equalsIgnoreCase("summer")){
                sports = "Volleyball";
            }
        }else if(typeGroup.equalsIgnoreCase("boys")){
            if(season.equalsIgnoreCase("winter")){
                sports = "Judo";
            }else if(season.equalsIgnoreCase("spring")){
                sports = "Tennis";
            }else if(season.equalsIgnoreCase("summer")){
                sports = "Football";
            }
        }else if(typeGroup.equalsIgnoreCase("mixed")){
            if(season.equalsIgnoreCase("winter")){
                sports = "Ski";
            }else if(season.equalsIgnoreCase("spring")){
                sports = "Cycling";
            }else if(season.equalsIgnoreCase("summer")){
                sports = "Swimming";
            }
        }

        System.out.printf("%s %.2f lv.", sports, total);

    }
}
