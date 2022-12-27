package com.pre_project.exception;

import lombok.Getter;

public enum ExceptionCode {

    MEMBER_NOT_FOUND(404,"회원이 아닙니다"),

    MEMBER_EXISTS(409,"MEMBER exists");

    @Getter
    private int status;

    @Getter
    private String message;


    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
