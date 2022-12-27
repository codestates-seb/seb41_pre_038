package com.pre_project.Security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pre_project.Security.dto.LoginDto;
import com.pre_project.Security.member.MemberDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter
{
    private final AuthenticationManager authenticationManager;
    private final JwtRepository jwtRepository;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException
    {
        try
        {
            ObjectMapper objectMapper = new ObjectMapper();
            LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

            UsernamePasswordAuthenticationToken authenticationToken
                    = new UsernamePasswordAuthenticationToken(loginDto.getLoginId(), loginDto.getPassword());

            Authentication authentication = authenticationManager.authenticate(authenticationToken);

            return authentication;
        }
        catch (IOException e)
        {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain filterChain,
                                            Authentication auth) throws IOException, ServletException
    {
        MemberDetails details = (MemberDetails) auth.getPrincipal();

        String accessToken = JWT.create()
                .withSubject("JWT")
                .withExpiresAt(new Date(System.currentTimeMillis() + (60000 * 100)))
                .withClaim("id", details.getMember().getMemberId())
                .withClaim("loginId", details.getUsername())
                .sign(Algorithm.HMAC256("zion"));

        jwtRepository.findMemberId(details.getMember().getMemberId())
                .ifPresent(jwtRepository::delete);

        String refreshToken = JWT.create()
                .withExpiresAt(new Date(System.currentTimeMillis() + (60000 * 4)))
                .withClaim("id", details.getMember().getMemberId())
                .withClaim("loginId", details.getUsername())
                .sign(Algorithm.HMAC256("zion"));

        Jwt jwt = new Jwt(accessToken, refreshToken, details.getMember());

        jwtRepository.save(jwt);

        response.addHeader("Authorization", "Bearer " + accessToken);
        response.addHeader("Refresh", refreshToken);
    }
}
