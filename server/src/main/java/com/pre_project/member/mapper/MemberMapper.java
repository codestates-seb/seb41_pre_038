package com.pre_project.member.mapper;

import com.pre_project.member.dto.MemberResponseDto;
import com.pre_project.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper
{
    default MemberResponseDto memberToMemberResponse(Member member)
    {
        return new MemberResponseDto(member);
    }

    List<MemberResponseDto> memberToMemberResponses(List<Member> member);



}
