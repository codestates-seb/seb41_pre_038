package com.pre_project.questions.dto;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Lob;


@Getter

public class QuestionPatchDto {
    private long questionId;

    private String title; // 질문 제목


    private String problemContent;    //문제 내용


    private String expectationContent;  //기대 내용



    public void setQuestionId(long questionId){
        this.questionId = questionId;
    }
}
