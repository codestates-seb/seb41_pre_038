package com.pre_project.answer.entity;

import com.pre_project.audit.Auditable;
import com.pre_project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Builder
@Entity
public class Answer extends Auditable
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    private String answerContent;

    private Integer vote = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
}