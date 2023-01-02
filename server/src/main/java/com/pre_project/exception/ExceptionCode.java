package com.pre_project.exception;

import lombok.Getter;

public enum ExceptionCode {

    /**
     * 유저용
     */
    MEMBER_NOT_FOUND(404,"회원이 아닙니다"),

    MEMBER_EXISTS(409,"MEMBER exists"),

    ID_EXIST(409, "This ID is already in use"),

    EMAIL_EXIST(409, "This Email is already in use"),

    NICKNAME_EXIST(409, "This nickname is already in use"),


    /**
     * 토큰
     */

    INVALID_REFRESH_TOKEN(400, "This refresh token is invalid"),

    NO_AUTH_TOKEN(401, "This token is not authorized to access"),

    NOT_AVAILABLE_TOKEN(400, "This token is unavailable"),

    REFRESH_TOKEN_NOT_FOUND(404, "Logout user"),


    /**
     * 질문
     */




    /**
     * 답변
     */

    ANSWER_NOT_FOUND(409, "This answer does not exist");


    @Getter
    private int status;

    @Getter
    private String message;


    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
