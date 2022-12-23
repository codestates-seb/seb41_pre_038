package com.pre_project.pre_project.validator;

import org.springframework.util.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * 검사 필드를 특정지을 커스텀 어노테이션 클래스
 */
public class NotSpaceValidator implements ConstraintValidator<NotSpace, String>
{
    @Override
    public void initialize(NotSpace constraintAnnotation)
    {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) // 유효성 검사 항목 null or 공백이 없으면 통과
    {
        return value == null || StringUtils.hasText(value);
    }
}
