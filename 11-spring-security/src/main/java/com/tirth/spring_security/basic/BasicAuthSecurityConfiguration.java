package com.tirth.spring_security.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

//@Configuration
public class BasicAuthSecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/h2-console/**").permitAll().anyRequest().authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .csrf(csrf -> csrf.ignoringRequestMatchers("/h2-console/**").disable())
                .headers(head -> head.frameOptions(frame -> frame.disable()))
                .httpBasic();

        return http.build();
    }

    //	@Bean
//	public UserDetailsService userDetailService() {
//
//		var user = User.withUsername("tirth")
//			.password("{noop}dummy")
//			.roles("USER")
//			.build();
//
//		var admin = User.withUsername("admin")
//				.password("{noop}dummy")
//				.roles("ADMIN")
//				.build();
//
//		return new InMemoryUserDetailsManager(user, admin);
//	}

    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
                .build();
    }

    @Bean
    public UserDetailsService userDetailService(DataSource dataSource) {

        var user = User.withUsername("tirth")
//			.password("{noop}dummy")
                .password("tirth")
                .passwordEncoder(str -> passwordEncoder().encode(str))
                .roles("USER")
                .build();

        var admin = User.withUsername("admin")
//				.password("{noop}dummy")
                .password("admin")
                .roles("ADMIN")
                .passwordEncoder(str -> passwordEncoder().encode(str))
                .build();

        var jdbcUserDetailManager = new JdbcUserDetailsManager(dataSource);
        jdbcUserDetailManager.createUser(admin);
        jdbcUserDetailManager.createUser(user);

        return jdbcUserDetailManager;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
