package com.pre_project.questions.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Lob;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId; // question Id

    private String title; // 질문 제목


    private String problemContent;    //문제 내용


    private String expectationContent;  //기대 내용

    private int vote;    // 추천 수

}
