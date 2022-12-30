package com.pre_project.questions.controller;



import com.pre_project.member.mapper.MemberMapper;
import com.pre_project.member.service.MemberService;
import com.pre_project.questions.dto.QuestionPatchDto;
import com.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.questions.dto.QuestionResponseDto;
import com.pre_project.questions.entity.Question;
import com.pre_project.questions.mapper.QuestionsMapper;
import com.pre_project.questions.repository.QuestionRepository;
import com.pre_project.questions.service.QuestionsService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
@CrossOrigin
public class QuestionsController{

    private final QuestionsService questionsService;

    private final QuestionsMapper questionsMapper;

    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final QuestionRepository questionRepository;

    public QuestionsController(QuestionsService questionsService, QuestionsMapper questionsMapper, MemberService memberService, MemberMapper memberMapper,
                               QuestionRepository questionRepository) {
        this.questionsService = questionsService;
        this.questionsMapper = questionsMapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
        this.questionRepository = questionRepository;
    }


    //질문 생성
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody @Valid QuestionPostDto postDto){
        Question question = questionsMapper.questionPostToQuestion(postDto);

        Question createdQuestion = questionsService.createQuestion(question);
        QuestionResponseDto response = questionsMapper.questionToQuestionResponse(createdQuestion);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    //질문 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive @NotNull long questionId,
                                        @RequestBody @Valid QuestionPatchDto questionPatchDto){

        //요청온 PatchDto에 questionId값을 Mapping을 통해 들어온 questionId값으로 넣어준다.
        questionPatchDto.setQuestionId(questionId);

        Question question = questionsMapper.questionPatchToQuestion(questionPatchDto);
        Question updatedQuestion = questionsService.updateQuestion(question);

        QuestionResponseDto response = questionsMapper.questionToQuestionResponse(updatedQuestion);

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

//    //내가 한 질문 전체 검색
//    @GetMapping("/{question-id}")
//    public ResponseEntity getMyQuestions(
//            @PathVariable("question-id") @Positive long memberId,
//            @Positive @RequestParam int page,
//            @Positive @RequestParam int size){
//        //Question question = questionsService.findQuestion(memberId);
//        return null;
//    }

    //질문 상세 페이지
    @GetMapping("/{question-id}")
    public ResponseEntity questionDetail(@PathVariable("question-id") Long questionId){
        Question question = questionsService.findQuestion(questionId);

        QuestionResponseDto response = questionsMapper.questionToQuestionResponse(question);

        return new ResponseEntity<>(response,HttpStatus.OK);
    }

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
    //질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(
            @PathVariable("question-id") @Positive long questionId){
     questionsService.deleteQuestion(questionId);

     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
