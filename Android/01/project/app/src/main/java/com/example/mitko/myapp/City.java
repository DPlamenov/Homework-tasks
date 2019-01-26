package com.example.mitko.myapp;

import java.io.Serializable;

/**
 * Created by Mitko on 30.1.2018 г..
 */

public class City implements Serializable {

    public String name;
    public String population;

    public City(String name,String population){
          this.name = name;
          this.population = population;
    }
}
