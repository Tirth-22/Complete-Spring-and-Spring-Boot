package com.in28min.spring_framwork.examples.g1;

import jakarta.inject.Inject;
import jakarta.inject.Named;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.Arrays;

//@Named (for CDI)
@Component
class BusinessService{
    private DataService dataService;

//    @Inject for CDI
    @Autowired
    public void setDataService(DataService dataService) {
        System.out.println("setDataService");
        this.dataService = dataService;
    }

    public DataService getDataService() {
        return dataService;
    }
}

@Component
class DataService {

}

@Configuration
@ComponentScan
public class CdiContextLauncherApplication {

    public static void main(String[] args) {

        try (var context =
                     new AnnotationConfigApplicationContext
                             (CdiContextLauncherApplication.class)) {

            Arrays.stream(context.getBeanDefinitionNames())
                    .forEach(System.out::println);

            System.out.println(context.getBean(BusinessService.class).getDataService());
        }
    }
}