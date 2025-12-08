package com.tirth.__jpa_and_hibernate.course;

import com.tirth.__jpa_and_hibernate.course.jpa.CourseJpaRepository;
import com.tirth.__jpa_and_hibernate.course.springdatajpa.CourseSpringDataJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CourseCommandLineRunner implements CommandLineRunner {

//    @Autowired
//    private CourseJDBCRepository repository;

//    @Autowired
//    private CourseJpaRepository repository;

    @Autowired
    private CourseSpringDataJpaRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Course(1,"AWS jpa","tirth"));
        repository.save(new Course(2,"Devops jpa","tirth"));
        repository.save(new Course(3,"java jpa",""));

        repository.deleteById(1l);

        System.out.println(repository.findById(3l));
        System.out.println(repository.findById(2l));

        System.out.println(repository.findAll());
        System.out.println(repository.count());

        System.out.println(repository.findByAuthor("tirth"));
        System.out.println(repository.findByAuthor(""));

        System.out.println(repository.findByCourseName("AWS jpa"));
        System.out.println(repository.findByCourseName("Devops jpa"));
    }
}
