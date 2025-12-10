package com.tirth.web_application.login;

public class AuthenticationService {

    public Boolean authenticate(String username,String password) {
        boolean isvalidUserName = username.equalsIgnoreCase(username);
        boolean isvalidUserPassword = password.equalsIgnoreCase(password);

        return isvalidUserName && isvalidUserPassword;
    }
}
