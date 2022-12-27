package com.pre_project.questions.dto;

import javax.persistence.Column;
import javax.persistence.Lob;

public class QuestionPatchDto {
    private long memberId;
    private long questionId;

    private String title; // 질문 제목

    @Lob
    @Column(nullable = false)
    private String problemContent;    //문제 내용

    @Lob
    @Column(nullable = false)
    private String expectationContent;  //기대 내용



    //수정요청을 보낼 때 현재 로그인한 memberId값을 넣어주기위해 생성
    public void setMemberId(long memberId){
        this.memberId = memberId;
    }


    public void setQuestionId(long questionId){
        this.questionId = questionId;
    }
}
