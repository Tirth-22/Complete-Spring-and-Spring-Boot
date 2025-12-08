package com.tirth.__jpa_and_hibernate.course.jdbc;

import com.tirth.__jpa_and_hibernate.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJDBCRepository {
    @Autowired
    private JdbcTemplate springJdbcTempletes;

    public static String INSERT_QUERY =
            """
                    insert into course(id,name,author)
                    values(?,?,?);
            """;

    public static String DELETE_QUERY=
            """
            delete from course where id=?;        
            """;

    public static String SELECT_QUERY=
            """
            select * from course
             where id=?;      
            """;

    public void insert(Course course) {
        springJdbcTempletes.update(INSERT_QUERY,
                course.getId(),course.getCourseName(),course.getAuthor());
    }

    public void delete(long id) {
        springJdbcTempletes.update(DELETE_QUERY,id);
    }

    public Course findById(long id) {
        return springJdbcTempletes.queryForObject(SELECT_QUERY,
                new BeanPropertyRowMapper<>(Course.class),id);
    }
}
