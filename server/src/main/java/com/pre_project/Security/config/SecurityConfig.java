//package com.pre_project.Security.config;
//
//import com.pre_project.Security.jwt.JwtAuthenticationFilter;
//import com.pre_project.Security.jwt.JwtAuthorizationFilter;
//import com.pre_project.Security.jwt.JwtRepository;
//import com.pre_project.member.repository.MemberRepository;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//
//
//import static org.springframework.security.config.Customizer.withDefaults;
//
//@Slf4j
//@RequiredArgsConstructor
//@Configuration
//public class SecurityConfig
//{
//
//    private final JwtRepository jwtRepository;
//    private final MemberRepository memberRepository;
//
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception
//    {
//        http
//                .headers().frameOptions().sameOrigin()  //동일 출처로부터 들어오는 request 만 페이지 렌더링
//                .and()
//                .csrf().disable() //CSRF 공격에 대한 Security 비활성화
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .addFilter(corsFilter())
//                .cors(withDefaults())
//                .formLogin().disable()
//                .httpBasic().disable()
//                .apply(new CustomFilterConfigure())
//                .and()
//                .authorizeRequests()
//                .antMatchers(HttpMethod.POST, "*/member/refresh").permitAll()
//                .antMatchers(HttpMethod.GET, "/*/members/").hasAnyRole("USER", "ADMIN")
//                .antMatchers(HttpMethod.GET, "/*members/").hasRole("ADMIN")
//                .anyRequest().permitAll();
//
//        return http.build();
//    }
//
//    private CorsFilter corsFilter()
//    {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        config.setAllowCredentials(true); //내서버가 응답을 할 때 json 을 자바스크립트에서 처리할 수 있게 할지를 설정하는것
//        config.addAllowedHeader("*");
//        config.addAllowedMethod("*");
//        source.registerCorsConfiguration("*", config);
//        return new CorsFilter(source);
//    }
//
//    @Bean
//    public BCryptPasswordEncoder bCryptPasswordEncoder()
//    {
//        return new BCryptPasswordEncoder();
//    }
//
//
//    //JWTAuthenticationFilter 등록
//    public class CustomFilterConfigure extends AbstractHttpConfigurer<CustomFilterConfigure, HttpSecurity>
//    {
//        @Override
//        public void configure(HttpSecurity builder) throws Exception
//        {
//            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
//
//            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtRepository);
//            jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
//
//            JwtAuthorizationFilter jwtAuthorizationFilter = new JwtAuthorizationFilter(authenticationManager, memberRepository);
//
//            builder
//                    .addFilter(jwtAuthenticationFilter)
//                    .addFilterAfter(jwtAuthorizationFilter, JwtAuthenticationFilter.class);
//        }
//    }
//}