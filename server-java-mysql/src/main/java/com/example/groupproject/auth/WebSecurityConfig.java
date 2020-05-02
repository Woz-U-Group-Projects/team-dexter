package com.example.groupproject.auth;

import static com.example.groupproject.auth.AuthConstants.SIGN_UP_URL;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

   @Autowired
  private MySQLUserDetailsService mySQLUserDetailsService;

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Autowired
  public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
    auth.userDetailsService(mySQLUserDetailsService).passwordEncoder(passwordEncoder());
  }
  
  @Bean
  @Override
  protected AuthenticationManager authenticationManager() throws Exception {
      return super.authenticationManager();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors()
      .and()
      .csrf().disable()
      .authorizeRequests()
      .antMatchers(HttpMethod.POST, SIGN_UP_URL, "/login", "/posts", "/api/user/**").permitAll()
      .antMatchers(HttpMethod.GET, "/login", "/posts", "/posts/*", "/api/user/**").permitAll()
      .antMatchers(HttpMethod.PUT, "/api/user/", "/api/user/update/**").permitAll()
      .antMatchers(HttpMethod.DELETE, "/posts/**").permitAll()
      .anyRequest().authenticated()
      .and()
      .addFilter(new JWTAuthenticationFilter(authenticationManager()))
      .addFilter(new JWTAuthorizationFilter(authenticationManager()))
      .sessionManagement()
      .sessionCreationPolicy(SessionCreationPolicy.ALWAYS);
  }
  
  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration corsConfig = new CorsConfiguration();
    corsConfig.applyPermitDefaultValues();
    corsConfig.setExposedHeaders(Arrays.asList("Authorization"));
    corsConfig.addAllowedOrigin("*");
    corsConfig.addAllowedHeader("*");
    corsConfig.addAllowedMethod("*");
    source.registerCorsConfiguration("/**", corsConfig);
    return source;
  }
}