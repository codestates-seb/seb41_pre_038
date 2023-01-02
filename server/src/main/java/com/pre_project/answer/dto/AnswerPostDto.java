package com.pre_project.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPostDto
{
    private Long answerId;

    @NotBlank
    private String answerContent;
}