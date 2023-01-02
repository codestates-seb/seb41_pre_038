package com.pre_project.questions.mapper;

import com.pre_project.dto.SingleResponseDto;
import com.pre_project.exception.BusinessLogicException;
import com.pre_project.exception.ExceptionCode;
import com.pre_project.member.entity.Member;
import com.pre_project.member.mapper.MemberMapper;
import com.pre_project.member.service.MemberService;
import com.pre_project.questions.dto.QuestionPatchDto;
import com.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.questions.dto.QuestionResponseDto;
import com.pre_project.questions.entity.Question;
import com.pre_project.questions.service.QuestionsService;


import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;


@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionsMapper {

    Question questionPostToQuestion(QuestionPostDto postDto);
    //질문등록 매퍼
//    default Question questionPostToQuestion(MemberService memberService,QuestionPostDto postDto){
//        Member member = memberService
//    }

    //질문수정 매퍼
    Question questionPatchToQuestion(QuestionPatchDto questionPatchDto);

    //질문수정 매퍼
//    default Question questionPatchToQuestion(MemberService memberService,
//            QuestionsService questionsService, QuestionPatchDto questionPatchDto){
//        Member member = memberService.getLoginMember(); //현재 로그인한 멤버 아이디 정보를 들고와서
//        System.out.printf("로그인한 아이디 출력 : "+member.getMemberId());
//        System.out.printf("로그인한 아이디 출력 : "+member.getLoginId());
//        if(member.getMemberId() !=
//                questionsService.findQuestionWriter(questionPatchDto.getQuestionId())){ //현재
//            throw new BusinessLogicException(ExceptionCode.ACCESS_DENIED_USER);
//        }
//        Question question = new Question();
//        question.setQuestionId(questionPatchDto.getQuestionId());
//        question.setTitle(questionPatchDto.getTitle());
//        question.setExpectationContent(questionPatchDto.getExpectationContent());
//        question.setProblemContent(questionPatchDto.getProblemContent());
//        question.addMember(member);
//
//        return question;
//    }

    //질문응답 매퍼
    default QuestionResponseDto questionToQuestionResponse(Question question){
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();
        questionResponseDto.setTitle(question.getTitle());
        questionResponseDto.setExpectationContent(question.getExpectationContent());
        questionResponseDto.setProblemContent(question.getProblemContent());
        return questionResponseDto;
    }

    //질문전체응답 매퍼
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);
}
