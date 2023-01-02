package com.pre_project.Security.member;

import com.pre_project.Security.utils.CustomAuthorityUtils;
import com.pre_project.member.entity.Member;
import com.pre_project.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * JWT 자격 증명을 위한 로그인 인증
 */

@Component
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService
{
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        Member member = memberRepository.findByLoginId(username)
                .orElseThrow(() -> new UsernameNotFoundException("This user does not exist"));

        return new MemberDetails(member);
    }


}
