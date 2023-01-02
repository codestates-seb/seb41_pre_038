package com.pre_project.member.dto;

import com.pre_project.validator.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;


@Getter @AllArgsConstructor
@NoArgsConstructor
public class MemberPatchDto
{
    private Long memberId;

    @NotSpace(message = "Password must be 8-20 characters without space")
    @Length(min = 8, max = 20)
    private String password;

    @NotSpace(message = "Nickname must be 5-16 characters without space")
    @Length(min = 5, max = 16)
    private String nickname;

    private String country;

    @Builder
    public MemberPatchDto(String password, String nickname, String country)
    {
        this.password = password;
        this.nickname = nickname;
        this.country = country;
    }

    public void addMemberId(Long memberId)
    {
        this.memberId = memberId;
    }
}
