package com.pre_project.answer.entity;

import com.pre_project.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class Answer
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    private String content;

    private Integer vote = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;
}
