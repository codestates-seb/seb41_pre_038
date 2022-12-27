package com.pre_project.Security.jwt;

import com.pre_project.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class Jwt
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jwtId;

    private String accessToken;

    private String refreshToken;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    public Jwt(String accessToken, String refreshToken, Member member)
    {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.member = member;
    }

    public void updateToken(String token)
    {
        accessToken = token;
    }
}
