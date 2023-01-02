package com.pre_project.questions.service;

import com.pre_project.exception.BusinessLogicException;
import com.pre_project.exception.ExceptionCode;
import com.pre_project.member.entity.Member;
import com.pre_project.member.repository.MemberRepository;
import com.pre_project.member.service.MemberService;
import com.pre_project.questions.entity.Question;
import com.pre_project.questions.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.expression.ExpressionException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

@Transactional
@Service
public class QuestionsService {

    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;


    public QuestionsService(QuestionRepository questionRepository,
                            MemberRepository memberRepository) {
        this.questionRepository = questionRepository;
        this.memberRepository = memberRepository;
    }

    public Question createQuestion(Question question){
        // 회원인지 아닌지 체크
        //Question verifiedQuestion = findVerifiedQuestion(question.getMember().getMemberId());
//        Member member = new Member(1L,"asdfaas","asdfasda","asdasdff@aasdfsdf.com","asdfasdfassdf","korea");
//        question.addMember(member);

        // 회원이면 addMember메서드를 통해서 member저장


        // 저장
        Question savaQuestion = questionRepository.save(question);
        return savaQuestion;
    }


    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(findQuestion::setTitle);

        Optional.ofNullable(question.getExpectationContent())
                .ifPresent(findQuestion::setExpectationContent);

        Optional.ofNullable(question.getProblemContent())
                .ifPresent(findQuestion::setProblemContent);

        Question updateQuestion = questionRepository.save(findQuestion);

        return updateQuestion;
    }

    //질문 작성자만 질문을 수정, 삭제 할 수 있게
    public Long findQuestionWriter(long questionId){
        // 질문 작성자만 질문을 수정, 삭제할 수 있도록 질문의 작성자를 찾는 메서드
        Question findQuestion = findVerifiedQuestion(questionId);

        return findQuestion.getMember().getMemberId();
    }


    //질문 검색
    @Transactional(readOnly = true)
    public Question findQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.save(findQuestion);
        return findQuestion;
    }


    //전체 질문 출력
    @Transactional(readOnly = true)
    public Page<Question> findQuestions(int page,int size){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by("questionId").descending()));
    }

    //질문 삭제
    public void deleteQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }


   public Question findVerifiedQuestion(long questionId){
       Optional<Question> optionalQuestion =
               questionRepository.findById(questionId);

       Question findQuestion =
               optionalQuestion.orElseThrow(() ->
                       new BusinessLogicException(ExceptionCode.NO_AUTH_TOKEN));

       return findQuestion;
   }
}
