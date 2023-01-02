package com.pre_project.questions.dto;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Lob;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class QuestionPostDto {

    private String title; // 질문 제목


    private String problemContent;    //문제 내용


    private String expectationContent;  //기대 내용


    private int vote;    // 추천 수
}
