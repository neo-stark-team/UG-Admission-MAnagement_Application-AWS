package com.examly.springapp.config; 
 
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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; 
 
import com.examly.springapp.serviceimpl.UserDetailsServiceImpl; 
 
 
 
 
 
@EnableWebSecurity 
@Configuration 
// @EnableGlobalMethodSecurity(prePostEnabled=true) 
public class MySecurityConfig extends WebSecurityConfigurerAdapter { 
 
 	
	@Autowired 
	private UserDetailsServiceImpl userdetailservice; 
	 
	@Autowired 
	private JwtAuthenticationFilter jwtAuthenticationFilter; 
	 
	@Autowired 
	private JwtAuthenticationEntryPoint unauthorizedHandler; 
	 
	@Override 
	@Bean 
	public AuthenticationManager authenticationManagerBean() throws Exception { 
		return super.authenticationManagerBean(); 
	} 
	 
	@Bean 
	public BCryptPasswordEncoder passwordEncorder() { 
		return new BCryptPasswordEncoder(); 
	} 
	@Override 
	protected void configure(AuthenticationManagerBuilder auth) throws Exception { 
		auth.userDetailsService(this.userdetailservice).passwordEncoder(passwordEncorder()); 
	} 
 
	@Override 
	protected void configure(HttpSecurity http) throws Exception { 
		http
		  .csrf()
		  .disable()
		  .cors()
		  .disable()
		  .authorizeRequests()
		//   .antMatchers("/admin/viewInstitutes").hasAnyAuthority("USER","ADMIN")
		 //  .antMatchers("/deleteInstitute/{instituteId}","/checkid","/addcourse","/updatecourse","/deletecourse/**","/approve/**","/reject/**","/approved","/pending","/rejected","/user/all","/user/delete/**").permitAll()
		  
		//   .antMatchers("/addReview/**").hasAnyAuthority("USER")
		  .antMatchers("/generate-token","/user/signup","/check-email","/check-username","/check-mobileno","/AdminRoleName","/UserRoleName","/admin/addInstitute","/admin/viewInstitutes","/admin/editInstitute").permitAll()
		 
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		  
		  .anyRequest().authenticated()
		  
		  .and()
		  .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
		  .and()
		  .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); 
		
		http.addFilterBefore(jwtAuthenticationFilter,UsernamePasswordAuthenticationFilter.class); 
	} 
	
	
	
} 
