package com.pre_project.pre_project.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

@Configuration
public class JpaManyToOneBiDirectionConfig {
    private EntityManager em;
    private EntityTransaction tx;


    @Bean
    public CommandLineRunner JpaManyToOneRunner(EntityManagerFactory emFactory){
        this.em = emFactory.createEntityManager();
        this.tx = em.getTransaction();

        return args -> {
            mapintManyToOneUniDirection();
        };
    }


    private void mapintManyToOneUniDirection(){
        tx.begin();

    }
}
