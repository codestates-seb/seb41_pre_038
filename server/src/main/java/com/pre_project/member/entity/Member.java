package com.pre_project.member.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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
    public Member(Long memberId, String loginId, String password, String email, String nickname, String country)
    {
        this.memberId = memberId;
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

}
