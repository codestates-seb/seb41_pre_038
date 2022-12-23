package com.pre_project.pre_project.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @NotSpace 어노테이션 추가
 * Null 허용
 * 공백 X
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = {NotSpaceValidator.class})
public @interface NotSpace
{
    String message() default "Space is not allowed"; //유효성 검사 false 일 경우 반환할 기본 메세지
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
