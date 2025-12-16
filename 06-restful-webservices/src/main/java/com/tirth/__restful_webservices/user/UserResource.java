package com.tirth.__restful_webservices.user;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserResource {

    private UserDaoService userDaoService;

    public UserResource(UserDaoService userDaoService) {
        this.userDaoService = userDaoService;
    }

    @GetMapping("/users")
    public List<User> findAll() {
        return userDaoService.findAll();
    }

    @GetMapping("/users/{id}")
    public User findOne(@PathVariable int id) {
        return userDaoService.findById(id);
    }

    @PostMapping("/user")
    public User create(@RequestBody User user) {
        return userDaoService.addUser(user);
    }
}
