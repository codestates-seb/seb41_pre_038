package com.pre_project.questions.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Lob;


@Getter
@Setter
public class QuestionPostDto {
    @Column(length = 50, nullable = false)
    private String title; // 질문 제목

    @Lob
    @Column(nullable = false)
    private String content;// 질문 내용


    private int vote;    // 추천 수
}
