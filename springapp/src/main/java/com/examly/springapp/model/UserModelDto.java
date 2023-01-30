package com.examly.springapp.model;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
public class UserModelDto {

	private Long id;
	@NotEmpty(message="username required")
	@NotNull
	private String username;
	@Size(min=4,message="username should be 4characters in length")
	@NotEmpty(message="username required")
	@NotNull
	@Size(min=8,message="pasword should be 8characters in length")
	private String password;
	@NotEmpty(message="email required")
	@NotNull
	@Email(message="must be a valid Email")
	private String email;
	@NotEmpty(message="mobile number required")
	@NotNull
	@Pattern(regexp="(^$|[0-9]{10})",message="enter valid mobile number")
	private String mobileNumber;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
}
