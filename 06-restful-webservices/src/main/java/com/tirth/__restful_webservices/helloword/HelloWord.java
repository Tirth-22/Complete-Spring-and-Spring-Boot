package com.tirth.__restful_webservices.helloword;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWord {

    @GetMapping("/hello-word")
    public String helloWord() {
        return "Hello World!";
    }

    @GetMapping("/hello-word-bean")
    public HelloWordBean helloWordBean() {
        return new HelloWordBean("Heyy Bean!");
    }

    @GetMapping("/hello-word/{name}")
    public HelloWordBean helloWord(@PathVariable String name) {
        return new  HelloWordBean(name);
    }

}
