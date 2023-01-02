package com.pre_project.questions.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId; // question Id
    private Long memberId;  // member Id

    private String title; // 질문 제목

    private String problemContent;    //문제 내용


    private String expectationContent;  //기대 내용

    private int vote;    // 추천 수


    public QuestionResponseDto(Long questionId, String title, String problemContent, String expectationContent, int vote) {
        this.questionId = questionId;
        this.title = title;
        this.problemContent = problemContent;
        this.expectationContent = expectationContent;
        this.vote = vote;
    }
}
