package com.pre_project;

import com.google.gson.Gson;
import com.pre_project.member.dto.MemberPostDto;
import com.pre_project.questions.controller.QuestionsController;
import com.pre_project.questions.dto.QuestionPostDto;
import com.pre_project.questions.dto.QuestionResponseDto;
import com.pre_project.questions.entity.Question;
import com.pre_project.questions.mapper.QuestionsMapper;
import com.pre_project.questions.service.QuestionsService;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static com.pre_project.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.pre_project.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(QuestionsController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class QuestionControllerRestDocsTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private QuestionsService questionsService;

    @MockBean
    private QuestionsMapper questionsMapper;

    @Autowired
    private Gson gson;

//    @Test
//    public void postQuestionTest() throws Exception{
//        //given
//        QuestionPostDto post = new QuestionPostDto("test","test내용asd","test내용asd",2);
//        String content = gson.toJson(post);
//
//        QuestionResponseDto questionResponseDto =
//                new QuestionResponseDto("test","test내용","test내용",0);
//
//
//        //Mock 객체를 이용한 Stubbing
//        given(questionsMapper.questionPostToQuestion(Mockito.any(QuestionPostDto.class))).willReturn(new Question());
//
//
//        Question mockResultQuestion = new Question();
//        mockResultQuestion.setQuestionId(1L);
//        given(questionsService.createQuestion(Mockito.any(Question.class))).willReturn(mockResultQuestion);
//
//
//        given(questionsMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(questionResponseDto);
//
//
//
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        post("/questions/")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//
//        //then
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(header().string("Location",is(startsWith("/questions"))))
//                .andDo(document(
//                        "post-question",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("title").type(JsonFieldType.STRING).description("제목"),
//                                        fieldWithPath("problemContent").type(JsonFieldType.STRING).description("문제 내용"),
//                                        fieldWithPath("expectationContent").type(JsonFieldType.STRING).description("기대내용")
//
//                                )
//                        ),
//                        responseHeaders(
//                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
//                        )
//                ));
//
//
//    }
}
