package com.tirth.__restful_webservices.user;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Component
public class UserDaoService {
    private static List<User> users = new ArrayList<User>();
    private static int userCount = 0;

    static {
        users.add(new User(++userCount,"tirth", LocalDate.now().minusYears(20)));
        users.add(new User(++userCount,"Yesha", LocalDate.now().minusYears(19)));
        users.add(new User(++userCount,"harshit", LocalDate.now().minusYears(20)));
    }

    public List<User> findAll() {
        return users;
    }

    public User findById(int id) {
        return users.stream().filter(user -> user.getId() == id).
                findFirst().orElse(null);
    }

    public User addUser(User user) {
        user.setId(++userCount);
        users.add(user);
        return user;
    }

    public void deleteByid(int id){
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        users.removeIf(predicate);
    }

    @ResponseStatus(code = HttpStatus.NOT_FOUND)
    public static class UserNotFoundException extends RuntimeException {

        public UserNotFoundException(String message) {
            super(message);
        }

    }
}
