package com.examly.springapp.model; 
 
import org.springframework.security.core.GrantedAuthority; 
import org.springframework.security.core.userdetails.UserDetails; 
 
import com.fasterxml.jackson.annotation.JsonIgnore; 
 
import java.util.Collection; 
import java.util.HashSet; 
import java.util.Set; 
 
 
import javax.persistence.Entity; 
import javax.persistence.FetchType; 
import javax.persistence.GeneratedValue; 
import javax.persistence.GenerationType; 
import javax.persistence.Id; 
import javax.persistence.ManyToOne; 
import javax.persistence.OneToOne; 
import javax.persistence.CascadeType; 
import javax.persistence.Table; 
import javax.persistence.UniqueConstraint; 
import javax.validation.constraints.NotEmpty; 
import javax.validation.constraints.NotNull; 
import javax.validation.constraints.Size; 
import javax.validation.constraints.Email; 
import javax.validation.constraints.Pattern; 
 
@Entity 
@Table(name = "user",uniqueConstraints={ 
        @UniqueConstraint(columnNames = "email"), 
        @UniqueConstraint(columnNames = "username"), 
        @UniqueConstraint(columnNames = "mobileNumber") 
       }) 
public class User implements UserDetails{ 
	 
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO) 
	private Long id;//userId 
	//@Column(name = "username", nullable = false) 
	@NotEmpty(message="username required") 
	@NotNull 
	@Size(min=4,message="username should be 4characters in length") 
	private String username; 
	@JsonIgnore 
	@NotEmpty(message="password required") 
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
	 
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL) 
	private Admission admission; 
   
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL) 
	private Rating rating; 
	 
	public Rating getRating() { 
		return rating; 
	} 
	public void setRating(Rating rating) { 
		this.rating = rating; 
	} 
 
	public Admission getAdmission() { 
		return admission; 
	} 
	public void setAdmission(Admission admission) { 
		this.admission = admission;  
	} 
	@ManyToOne(fetch=FetchType.EAGER)  
	private  Role role ; 
 
	public Long getId() { 
		return id; 
	} 
	public void setId(Long id) { 
		this.id = id; 
	} 
	public Role getRole() { 
		return role; 
	} 
	public void setRole(Role role) { 
		this.role = role; 
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
		this.email= email; 
	} 
	 
	 
	public String getMobileNumber() { 
		return mobileNumber; 
	} 
	public void setMobileNumber(String mobileNumber) { 
		this.mobileNumber = mobileNumber; 
	} 
	public User() { 
		 
	} 
	public User(String username, String password, String email, String mobileNumber) { 
		super(); 
		this.username = username; 
		this.password = password; 
		this.email = email; 
		this.mobileNumber = mobileNumber; 
	} 
	@Override 
	 
	public Collection<? extends GrantedAuthority> getAuthorities() { 
            Set<Authority> set=new HashSet<>(); 
            set.add(new Authority(role.getRoleName())); 
		return set; 
	} 
	@Override 
	@JsonIgnore 
	public boolean isAccountNonExpired() { 
		return true; 
	} 
	@Override 
	@JsonIgnore 
	public boolean isAccountNonLocked() { 
		return true; 
	} 
	@Override 
	@JsonIgnore 
	public boolean isCredentialsNonExpired() { 
		return true; 
	} 
	@Override 
	@JsonIgnore 
	public boolean isEnabled() { 
		return true; 
	} 
	
	
	
	
	
	
	
	
	
} 
