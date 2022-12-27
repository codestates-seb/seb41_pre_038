package com.pre_project.questions.entity;


import com.pre_project.audit.Auditable;
import com.pre_project.member.entity.Member;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Getter
@Setter
public class Question extends Auditable{//시간 추가
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId; // 질문 ID

    @ManyToOne
    @JoinColumn(name = "MEMEBER_ID")
    private Member member;

    public void addMember(Member member){
        this.member = member;
    }

    @Column(length = 50, nullable = false)
    private String title; // 질문 제목

    @Lob
    @Column(nullable = false)
    private String problemContent;    //문제 내용

    @Lob
    @Column(nullable = false)
    private String expectationContent;  //기대 내용
    
    @Column(nullable = false)
    private int vote;    // 추천 수

}
