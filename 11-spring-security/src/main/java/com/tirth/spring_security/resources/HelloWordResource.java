package com.tirth.spring_security.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWordResource {

    @GetMapping("/hello-word")
    public String helloWord(){
        return "Hello World!";
    }
}
