package com.pre_project.questions.controller;


import com.pre_project.dto.SingleResponseDto;
import com.pre_project.questions.dto.QuestionPatchDto;
import com.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.questions.dto.QuestionResponseDto;
import com.pre_project.questions.entity.Question;
import com.pre_project.questions.mapper.QuestionsMapper;
import com.pre_project.questions.service.QuestionsService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

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

    //질문 생성
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionPostDto postDto){
        Question question = questionsMapper.questionPostToQuestion(postDto);

        Question createdQuestion = questionsService.createQuestion(question);
        QuestionResponseDto response = questionsMapper.questionToQuestionResponse(createdQuestion);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    //질문 수정
    @PatchMapping("/{member-id}/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("member-id") @Positive long memberId,
                                        @PathVariable("question-id") @Positive long questionId,
                                        @RequestBody QuestionPatchDto questionPatchDto){

        //현재 로그인한 MemberID값과
        questionPatchDto.setMemberId(memberId);
        //현재 선택한 questionID값을 통해서 수정
        questionPatchDto.setQuestionId(questionId);

        Question question = questionsService.updateQuestion
                (questionsMapper.questionPatchToQuestion(questionPatchDto));

        QuestionResponseDto response = questionsMapper.questionToQuestionResponse(question);
        return new ResponseEntity<>(response,HttpStatus.OK);
    }


    //내가 한 질문 전체 검색
//    @GetMapping("/{member-id}")
//    public ResponseEntity getMyQuestions(
//            @PathVariable("member-id") @Positive long memberId,
//            @Positive @RequestParam int page,
//            @Positive @RequestParam int size){
//        //Question question = questionsService.findQuestion(memberId);
//        return null;
//    }

    //질문 전체 출력
    @GetMapping
    public ResponseEntity getAllQuestions(
            @Positive @RequestParam int page,
            @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionsService.findQuestions(page-1, size);
        List<Question> questions = pageQuestions.getContent();


        return new ResponseEntity(
                questionsMapper.
                        questionsToQuestionResponses
                                (questions),HttpStatus.OK);
    }


}
