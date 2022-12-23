package com.pre_project.pre_project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PageInfo //페이지 정보
{
    private int page;

    private int size;

    private long totalElements;

    private int totalPages;
}
