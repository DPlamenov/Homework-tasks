package com.example.mitko.myapp;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AlphabetIndexer;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ArrayList<City> arrayOfUsers = new ArrayList<City>();
        final Adapter adapter = new Adapter(this, arrayOfUsers);
        ListView listView = (ListView) findViewById(R.id.lv);


        City city = new City("City name","City population");

        adapter.add(city);


        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                String name = adapter.getItem(i).name;
                //Toast.makeText(getApplicationContext(), name,Toast.LENGTH_LONG).show();
                Intent intent = new Intent(getApplicationContext(),CityActivity.class);
                intent.putExtra("city",adapter.getItem(i));
                startActivity(intent);
            }
        });
        listView.setAdapter(adapter);






    }
}
