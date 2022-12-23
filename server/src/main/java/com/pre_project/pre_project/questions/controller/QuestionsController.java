package com.pre_project.pre_project.questions.controller;


import com.pre_project.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.pre_project.questions.mapper.QuestionsMapper;
import com.pre_project.pre_project.questions.service.QuestionsService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionsController {

    private final QuestionsService questionsService;

    private final QuestionsMapper questionsMapper;

    public QuestionsController(QuestionsService questionsService, QuestionsMapper questionsMapper) {
        this.questionsService = questionsService;
        this.questionsMapper = questionsMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto postDto){

        return null;
    }
}
