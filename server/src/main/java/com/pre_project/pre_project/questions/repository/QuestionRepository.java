package com.pre_project.pre_project.questions.repository;

import com.pre_project.pre_project.questions.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
