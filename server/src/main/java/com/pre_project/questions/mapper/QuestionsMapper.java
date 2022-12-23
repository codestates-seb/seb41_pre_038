package com.pre_project.questions.mapper;

import com.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.questions.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionsMapper {
    Question questionPostToQuestion(QuestionPostDto postDto);


}
