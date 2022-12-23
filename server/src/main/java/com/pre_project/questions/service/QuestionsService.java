package com.pre_project.questions.service;

import com.pre_project.questions.entity.Question;
import com.pre_project.questions.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class QuestionsService {

    private final QuestionRepository questionRepository;


    public QuestionsService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question){
        // 회원인지 아닌지 체크
        // 멤버 id를 넣어준다.
        questionRepository.save(question);
        return null;
    }

}
