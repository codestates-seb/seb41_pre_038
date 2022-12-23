package com.pre_project.questions.entity;


import com.pre_project.member.entity.Member;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId; // 질문 ID

    @Column(length = 50, nullable = false)
    private String title; // 질문 제목

    @Lob
    @Column(nullable = false)
    private String content;// 질문 내용

    @Column(nullable = false)
    private int vote;    // 추천 수

    @ManyToOne
    @JoinColumn(name = "MEMEBER_ID")
    private Member member;
}
