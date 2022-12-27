package com.pre_project.member.controller;

import com.pre_project.dto.MultiResponseDto;
import com.pre_project.dto.SingleResponseDto;
import com.pre_project.member.dto.MemberPatchDto;
import com.pre_project.member.dto.MemberPostDto;
import com.pre_project.member.dto.MemberResponseDto;
import com.pre_project.member.entity.Member;
import com.pre_project.member.mapper.MemberMapper;
import com.pre_project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RequiredArgsConstructor
@Validated
@Slf4j
@RestController
@RequestMapping("/members")
public class MemberController
{
    private final MemberService memberService;

    private final MemberMapper mapper;


    @PostMapping("/sign-up") //회원 등록
    public ResponseEntity registerMember(@Valid @RequestBody MemberPostDto memberPost)
    {
        Member member = memberService.saveMember(mapper.memberPostToMember(memberPost));
        MemberResponseDto response = mapper.memberToMemberResponse(member);

        log.info("member registered");
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}") //회원 수정
    public ResponseEntity updateMember(@PathVariable("member-id") long memberId, @Valid @RequestBody MemberPatchDto memberPatchDto)
    {
        memberPatchDto.addMemberId(memberId);
        Member member = memberService.update(mapper.memberPatchToMember(memberPatchDto));
        MemberResponseDto response = mapper.memberToMemberResponse(member);

        log.info("member updated");
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{member-id}") //회원 1명 조회
    public ResponseEntity getMember(@PathVariable("member-id") long memberId)
    {
        Member findMember = memberService.findMemberById(memberId);
        MemberResponseDto response = mapper.memberToMemberResponse(findMember);

        log.info("get member = {}", memberId);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }


    @GetMapping //전체 회원 조회
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size)
    {
        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();

        List<MemberResponseDto> responses = mapper.memberToMemberResponses(members);

        log.info("get all members");
        return new ResponseEntity(new MultiResponseDto<>(responses, pageMembers), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}") //회원 삭제
    public ResponseEntity deleteMember(@PathVariable("member-id") long memberId)
    {
        Member member = memberService.findMemberById(memberId);

        memberService.deleteMember(member.getMemberId());

        log.info("delete member = {}", memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
