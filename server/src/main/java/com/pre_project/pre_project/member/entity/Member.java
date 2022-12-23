package com.pre_project.pre_project.member.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Getter
@DynamicUpdate
@NoArgsConstructor(access = AccessLevel.PROTECTED)  //기본 생성자를 만들수없게 설정
@Entity
public class Member //엔티티 클래스
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    @Column(unique = true, nullable = false)
    private String loginId;

    @Column(nullable = false)
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true)
    private String nickname;

    private String country;

    @Builder
    public Member(String loginId, String password, String email, String nickname, String country)
    {
        this.loginId = loginId;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.country = country;
    }

    //비밀번호 변경
    public void updatePassword(String password)
    {
        this.password = password;
    }


    //닉네임 변경
    public void updateNickname(String nickname)
    {
        this.nickname = nickname;
    }

    public void updateCountry(String country)
    {
        this.country = country;
    }

    public void updateMember(String password, String nickname, String country)
    {
        this.password = password;
        this.nickname = nickname;
        this.country = country;
    }
}
