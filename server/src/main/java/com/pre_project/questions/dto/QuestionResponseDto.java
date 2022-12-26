package com.pre_project.questions.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Lob;


@AllArgsConstructor
@Getter
public class QuestionResponseDto {
    private String title; // 질문 제목

    private String content;// 질문 내용

    private int vote;    // 추천 수

}
