package com.pre_project.answer.dto;

import lombok.Getter;

@Getter
public class AnswerResponseDto
{
    private Long answerId;

    private String answerContent;

    private Integer vote;
}
