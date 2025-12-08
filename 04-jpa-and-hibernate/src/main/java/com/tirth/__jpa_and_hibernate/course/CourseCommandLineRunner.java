package com.tirth.__jpa_and_hibernate.course;

import com.tirth.__jpa_and_hibernate.course.jpa.CourseJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CourseCommandLineRunner implements CommandLineRunner {

//    @Autowired
//    private CourseJDBCRepository repository;

    @Autowired
    private CourseJpaRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.insert(new Course(1,"AWS jpa","tirth"));
        repository.insert(new Course(2,"Devops jpa","tirth"));
        repository.insert(new Course(3,"java jpa","tirth"));

        repository.delete(1);

        System.out.println(repository.findById(2));
        System.out.println(repository.findById(3));
    }
}
