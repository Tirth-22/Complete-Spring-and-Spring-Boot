package com.tirth.__restful_webservices.jpa;

import com.tirth.__restful_webservices.user.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Integer> {
}
