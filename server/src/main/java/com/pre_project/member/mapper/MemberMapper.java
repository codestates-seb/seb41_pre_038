package com.pre_project.member.mapper;

import com.pre_project.member.dto.MemberPatchDto;
import com.pre_project.member.dto.MemberPostDto;
import com.pre_project.member.dto.MemberResponseDto;
import com.pre_project.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper
{
    default Member memberPostToMember(MemberPostDto request)
    {
        Member member = Member.builder()
                .loginId(request.getLoginId())
                .password(request.getPassword())
                .email(request.getEmail())
                .nickname(request.getNickname())
                .country(request.getCountry())
                .build();

        return member;
    }

    Member memberPatchToMember(MemberPatchDto request);

    default MemberResponseDto memberToMemberResponse(Member member)
    {
        return new MemberResponseDto(member);
    }

    List<MemberResponseDto> memberToMemberResponses(List<Member> member);
}
