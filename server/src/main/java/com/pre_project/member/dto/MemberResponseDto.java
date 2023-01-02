package com.pre_project.member.dto;

import com.pre_project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter @Setter
public class MemberResponseDto
{
    private Long memberId;

    private String loginId;

    private String password;

    private String email;

    private String nickname;

    private String country;

    public MemberResponseDto(String loginId, String password, String email, String nickname, String country)
    {
        this.loginId = loginId;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.country = country;
    }

    public MemberResponseDto(Member entity)
    {
        this.memberId = entity.getMemberId();
        this.loginId = entity.getLoginId();
        this.password = entity.getPassword();
        this.email = entity.getEmail();
        this.nickname = entity.getNickname();
        this.country = entity.getCountry();
    }
}