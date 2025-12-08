package com.tirth.__jpa_and_hibernate.course.jpa;

import com.tirth.__jpa_and_hibernate.course.Course;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class CourseJpaRepository {

    @PersistenceContext
    private EntityManager em;

    public void insert(Course course) {
        em.persist(course);
    }

    public Course findById(long id) {
        return em.find(Course.class,id);
    }

    public void delete(long id) {
        Course course = em.find(Course.class,id);
        em.remove(course);
    }

}
