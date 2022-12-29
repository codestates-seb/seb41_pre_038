package com.pre_project.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class webConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://stackoverflow-deploy.s3-website.ap-northeast-2.amazonaws.com",
                        "http://ec2-54-180-116-18.ap-northeast-2.compute.amazonaws.com:8080",
                        "localhost:3000");
    }
}