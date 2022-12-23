package com.pre_project.pre_project.audit;

import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;


@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {

    @CreatedDate    //생성 시간
    @Column(name = "created_at", updatable = false) //updatable = false 수정안됨
    private LocalDateTime createdAt;

    @LastModifiedDate   //수정 시간
    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt;
}
