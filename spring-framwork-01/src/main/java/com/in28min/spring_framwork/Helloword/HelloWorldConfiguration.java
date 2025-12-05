package com.in28min.spring_framwork;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

record Person(String name, int age) {};

@Configuration
public class HelloWorldConfiguration {

    @Bean
    public String name(){
        return "Tirth";
    }

    @Bean
    public String age(){
        return "19";
    }

    @Bean
    public Person person(){
        return new Person("Tirth",19);
    }


}
