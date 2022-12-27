package com.pre_project.answer.service;

import com.pre_project.answer.entity.Answer;
import com.pre_project.answer.repository.AnswerRepository;
import com.pre_project.member.entity.Member;
import com.pre_project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service @Transactional(readOnly = true)
public class AnswerService
{
    private final AnswerRepository answerRepository;

    private final MemberService memberService;

    public Answer saveAnswer(Answer answer)
    {
        verifyAnswer(answer);

        return null;
    }

    private void verifyAnswer(Answer answer)
    {
        memberService.findMemberById(answer.getMember().getMemberId());

        //질문이 존재하는지 확인
    }


}
