package com.pre_project.pre_project.member.service;

import com.pre_project.pre_project.member.entity.Member;
import com.pre_project.pre_project.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LoginService
{
    private final MemberRepository memberRepository;

    /**
     * @return null 로그인 실패
     */
    public Member login(String loginId, String password) //로그인 검증
    {
        Optional<Member> findMember = memberRepository.findByLoginId(loginId);
        Member member = findMember.get();

        if(member.getPassword().equals(password))
        {
            return member;
        }

        else
            return null;
    }

}
