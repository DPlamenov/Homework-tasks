using System;
using System.Collections.Generic;
using System.IO;
using System.Windows;

namespace WpfApp1
{

    public partial class MainWindow : Window
    {
      

        //Main method
        public MainWindow()
        {
            InitializeComponent();
           
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("Click");            
        }


        
    }
}
