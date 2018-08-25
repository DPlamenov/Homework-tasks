import javax.swing.*;
import java.awt.*;

public class jframe {

    public static void main(String[] args) {
        JFrame windows = new JFrame("Program");
        windows.setVisible(true);
        windows.setSize(800,600);
        windows.setResizable(false);
        JLabel welcome_label = new JLabel("Welcome");
        welcome_label.setHorizontalAlignment(SwingConstants.CENTER);
        welcome_label.setVerticalAlignment(SwingConstants.TOP);
        windows.add(welcome_label);
    }
}

