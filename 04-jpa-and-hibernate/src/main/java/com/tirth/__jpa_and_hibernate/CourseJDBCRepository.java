package com.tirth.__jpa_and_hibernate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJDBCRepository {
    @Autowired
    private JdbcTemplate springJdbcTempletes;

    public static String INSERT_QUERY =
            """
                    insert into course(id,name,author)
                    values(1,'AWS','tirth');
            """;

    public void insert(){
        springJdbcTempletes.update(INSERT_QUERY);
    }
}
