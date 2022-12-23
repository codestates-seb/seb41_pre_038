package com.pre_project.pre_project.member.dto;

import com.pre_project.pre_project.member.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@NoArgsConstructor
public class MemberPostDto
{
    @NotBlank(message = "ID must be 5-16 characters")
    @Length(min = 5, max = 16)
    @Pattern(regexp = "^[a-zA-Z0-9]{5,16}$", message = "ID must not contain special characters/space")
    private String loginId;

    @NotBlank(message = "Password must be 8-20 characters without space")
    @Length(min = 8, max = 20)
    private String password;

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "Nickname must be 5-16 characters without space")
    @Length(min = 5, max = 16)
    private String nickname;

    private String country;

    @Builder
    public MemberPostDto(String loginId, String password, String email, String nickname, String country)
    {
        this.loginId = loginId;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.country = country;
    }

    public Member toEntity()
    {
        return Member.builder()
                .loginId(loginId)
                .password(password)
                .email(email)
                .nickname(nickname)
                .country(country)
                .build();
    }
}
