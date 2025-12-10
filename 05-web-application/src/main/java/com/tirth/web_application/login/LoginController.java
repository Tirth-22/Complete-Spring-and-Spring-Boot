package com.tirth.web_application.login;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    private AuthenticationService authenticationService;

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login(String name ,ModelMap model) {
        model.put("name", name);
        return "login";
    }

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public String welcomepage(ModelMap model,String name,String password) {
        if(authenticationService.authenticate(name,password)) {
                model.put("password", password);
                model.put("name", name);
            return "welcome";
        }
        return "login";
    }

    private String getLoggedinUsername() {
        @Nullable Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }
}
