package com.example.mitko.myapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AlphabetIndexer;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

public class CityActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.city_more);
        TextView name = (TextView) findViewById(R.id.morename);
        TextView population = (TextView) findViewById(R.id.morepopulation);



        Intent intent = getIntent();
        City city = (City) intent.getSerializableExtra("city");
        name.setText(city.name);

        population.setText("Population: " + city.population);








    }
}
