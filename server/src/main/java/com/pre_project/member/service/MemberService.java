package com.pre_project.member.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.pre_project.Security.utils.CustomAuthorityUtils;
import com.pre_project.Security.jwt.Jwt;
import com.pre_project.Security.jwt.JwtRepository;
import com.pre_project.member.entity.Member;
import com.pre_project.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberService
{
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final JwtRepository jwtRepository;

    @Transactional
    public Member saveMember(Member request) // 회원 가입
    {
        verifyMemberByLoginId(request.getLoginId()); //로그인 아이디 중복검사
        verifyMemberByEmail(request.getEmail()); //이메일 중복 검사
        verifyMemberByNickname(request.getNickname()); //닉네임 중복 검사

        String encryptedPassword = passwordEncoder.encode(request.getPassword());

        List<String> roles = authorityUtils.createRoles(request.getLoginId());

        request.updatePassword(encryptedPassword);
        request.updateRoles(roles);

        return memberRepository.save(request);
    }

    @Transactional
    public Member update(Member request) //회원 정보 수정
    {
        Member findMember = findMemberById(request.getMemberId());

        Optional.ofNullable(request.getPassword())
                .ifPresent(findMember::updatePassword);

        Optional.ofNullable(request.getNickname())
                .ifPresent(findMember::updateNickname);

        Optional.ofNullable(request.getCountry())
                .ifPresent(findMember::updateCountry);

        return findMember;
    }

    public Member findMemberById(long id) //회원 한명 조회
    {
        return memberRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("This user doesn't exist"));
    }

    public Page<Member> findMembers(int page, int size) //전체 회원 조회
    {
        return memberRepository.findAll
                (PageRequest.of(page, size, Sort.by("member-id").descending()));
    }

    @Transactional
    public void deleteMember(Long memberId) //회원 삭제
    {
        Member member = findMemberById(memberId);
        memberRepository.delete(member);
    }

    //로그인한 회원정보 반환
    public Member getLoginMember(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Member> member = memberRepository.findByLoginId(principal.toString());
        return member.get();
    }

    //사용자 토큰 가져오는 메서드
    @Transactional
    public String getAccessToken(String refreshToken)
    {
        Jwt token = jwtRepository.findRefreshToken(refreshToken)
                .orElseThrow(() -> new IllegalArgumentException("Refresh Token Not Found"));

        String accessToken = JWT.create()
                .withExpiresAt(new Date(System.currentTimeMillis() + 60000))
                .withClaim("id", token.getMember().getMemberId())
                .withClaim("username", token.getMember().getLoginId())
                .sign(Algorithm.HMAC256("zion"));

        token.updateToken(accessToken);
        return accessToken;
    }

    @Transactional
    public void deleteToken(String refreshToken)
    {
        jwtRepository.deleteJwtToken(refreshToken);
    }

    public Member getMemberFromToken(String token)
    {
        String pureToken = token.replace("Bearer ", "");

        Jwt jwt = jwtRepository.findAccessToken(pureToken).orElseThrow(() -> new IllegalArgumentException("Mismatch"));
        Member findMember = findMemberById(jwt.getMember().getMemberId());

        return findMember;
    }

    private void verifyMemberByEmail(String email) //이메일로 회원 조회
    {
        Optional<Member> member = memberRepository.findByEmail(email);

        if(member.isPresent())
        {
            throw new IllegalArgumentException("This email is already in use");
        }
    }

    private void verifyMemberByNickname(String nickname) //닉네임으로 회원 조회
    {
        Optional<Member> member = memberRepository.findByNickname(nickname);

        if(member.isPresent())
        {
            throw new IllegalArgumentException("This nickname is already in use");
        }
    }

    private void verifyMemberByLoginId(String loginId) //로그인 아이디로 회원 조회
    {
        Optional<Member> member = memberRepository.findByLoginId(loginId);

        if(member.isPresent())
            throw new IllegalStateException("This ID is already in use");
    }
}
