package com.pre_project.pre_project.member.dto;

import com.pre_project.pre_project.member.entity.Member;
import lombok.Getter;

@Getter
public class MemberResponseDto
{
    private Long memberId;

    private String loginId;

    private String password;

    private String email;

    private String nickname;

    private String country;

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