package com.pre_project.pre_project.member.service;

import com.pre_project.pre_project.member.dto.MemberPatchDto;
import com.pre_project.pre_project.member.dto.MemberPostDto;
import com.pre_project.pre_project.member.entity.Member;
import com.pre_project.pre_project.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MemberService
{
    private final MemberRepository memberRepository;

    @Transactional
    public Member saveMember(MemberPostDto request) // 회원 가입
    {
        verifyMemberByEmail(request.getEmail());
        verifyMemberByNickname(request.getNickname());

        Member member = Member.builder()
                .loginId(request.getLoginId())
                .password(request.getPassword())
                .email(request.getEmail())
                .nickname(request.getNickname())
                .country(request.getCountry())
                .build();

        return memberRepository.save(member);
    }

    @Transactional
    public Member update(long memberId, MemberPatchDto request) //회원 정보 수정
    {
        Member findMember = findMemberById(memberId);


        Optional.ofNullable(request.getPassword())
                .ifPresent(findMember::updatePassword);

        Optional.ofNullable(request.getNickname())
                .ifPresent(findMember::updateNickname);

        Optional.ofNullable(request.getCountry())
                .ifPresent(findMember::updateCountry);

        return (findMember);
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


    private void verifyMemberByEmail(String email) //이메일로 회원 조회
    {
        Optional<Member> member = memberRepository.findByNickname(email);

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
}
