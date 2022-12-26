package com.pre_project.questions.mapper;

import com.pre_project.dto.SingleResponseDto;
import com.pre_project.questions.dto.QuestionPatchDto;
import com.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.questions.dto.QuestionResponseDto;
import com.pre_project.questions.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionsMapper {

    //질문등록 매퍼
    Question questionPostToQuestion(QuestionPostDto postDto);

    //질문수정 매퍼
    Question questionPatchToQuestion(QuestionPatchDto patchDto);

    //질문응답 매퍼
    QuestionResponseDto questionToQuestionResponse(Question question);

    //질문전체응답 매퍼
    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> questions);

}
