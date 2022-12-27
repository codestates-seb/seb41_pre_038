package com.pre_project.Security.jwt;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;


public interface JwtRepository extends JpaRepository<Jwt, Long>
{
    @Query("select t from Jwt t left join fetch t.member m where t.member.memberId = :memberId")
    Optional<Jwt> findMemberId(@Param("memberId") Long memberId);

    @Query("select t from Jwt t left join fetch t.member where t.refreshToken = :token")
    Optional<Jwt> findRefreshToken(@Param("token") String token);

    @Query("select t from Jwt t left join fetch t.member where t.accessToken = :token")
    Optional<Jwt> findAccessToken(@Param("token") String token);

    @Modifying
    @Query("delete from Jwt t where t.refreshToken = :token")
    void deleteJwtToken(@Param("token") String token);
}
