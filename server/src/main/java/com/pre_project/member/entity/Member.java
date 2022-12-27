package com.pre_project.member.entity;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member //엔티티 클래스
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    @Column(unique = true, nullable = false)
    private String loginId;

    @Column(nullable = false, length = 100)
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true)
    private String nickname;

    private String country;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public Member(String email)
    {
        this.email = email;
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

    //국적 변경
    public void updateCountry(String country)
    {
        this.country = country;
    }

    //유저 권한 변경
    public void updateRoles(List<String> roles)
    {
        this.roles = roles;
    }

}