import java.util.Scanner;

public class BakingCompetition {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int players = Integer.parseInt(scanner.nextLine());
        int total_cooked = 0;
        double total_sum = 0;
        for (int i = 1; i <= players; i++) {
            int cookies = 0;
            int cakes = 0;
            int waffles = 0;
            String player_name = scanner.nextLine();
            String command = scanner.nextLine();
            while (!"Stop baking!".equals(command)) {
                String type_candy = command;
                int cooked = Integer.parseInt(scanner.nextLine());
                total_cooked += cooked;
                if (type_candy.equals("cookies")) {
                    total_sum += 1.50 * cooked;
                    cookies += cooked;
                } else if (type_candy.equals("cakes")) {
                    total_sum += 7.80 * cooked;
                    cakes += cooked;
                } else if (type_candy.equals("waffles")) {
                    total_sum += 2.30 * cooked;
                    waffles += cooked;
                }

                command = scanner.nextLine();
            }
            System.out.printf("%s baked %d cookies, %d cakes and %d waffles.%n", player_name, cookies, cakes, waffles);
        }
        System.out.printf("All bakery sold: %d%n", total_cooked);
        System.out.printf("Total sum for charity: %.2f lv.", total_sum);
    }
}
