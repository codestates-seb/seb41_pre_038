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

import javax.transaction.Transactional;
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
        Member member = new Member(1L,"asdf","asdf","asdf@asdf.com","asdf","korea");
        question.addMember(member);

        // 회원이면 addMember메서드를 통해서 member저장


        // 저장
        Question savaQuestion = questionRepository.save(question);
        return savaQuestion;
    }

    @Transactional
    public Question updateQuestion(Question question){
        //memberId가 있는지 체크
        //수정이 필요함 : Question의 memberId가 현재 로그인한 memberId와 비교하여 맞다면 수정
        //Question findQuestion = findVerifiedQuestion(question.getMember().getMemberId());

        //questionID가 맞는지 확인
        findVerifiedQuestion(question.getQuestionId());

        //*테스트* 글작성한사람의 아이디와 question에 저장된 memberId가 같을 때 수정
        if(question.getMember().getMemberId() == 1L){
            question.setContent(question.getContent());
        }

        return questionRepository.save(question);
    }

    //내가 한 질문만 출력
    @Transactional
    public Question findQuestion(long memberId,int page,int size){
        //question중 해당하는 memberId만 전체 출력

        //questionRepository.fin

        return null;
    }


    //전체 질문 출력
    public Page<Question> findQuestions(int page,int size){
        return questionRepository.findAll(PageRequest.of(page,size,
                Sort.by("questionId").descending()));
    }

    //질문 삭제
    public void deleteQuestion(long questionId){
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }



   public Question findVerifiedQuestion(long memberId){
       Optional<Question> optionalQuestion =
               questionRepository.findById(memberId);

       Question findQuestion =
               optionalQuestion.orElseThrow(() ->
                       new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

       return findQuestion;
   }



    private void verifyExistsEmail(String email){

    }

}
