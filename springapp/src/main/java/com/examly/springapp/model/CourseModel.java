

package com.examly.springapp.model;


//imports


import javax.persistence.Entity;


import javax.persistence.Id;


import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.CascadeType;


import java.util.LinkedHashSet;


import javax.persistence.FetchType;


import javax.persistence.GeneratedValue;


import javax.persistence.GenerationType;


import java.util.Set;


import javax.persistence.ManyToOne;


import javax.persistence.OneToMany;


import com.examly.springapp.model.InstituteModel;


import javax.validation.constraints.NotEmpty;


import javax.validation.constraints.NotNull;


import javax.validation.constraints.Size;


import javax.validation.constraints.Email;


import javax.validation.constraints.Pattern;


@Entity

@Table(name="course")

public class CourseModel {
	

	@Id
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private int courseId;
	
	@NotEmpty(message="Course name not be empty")
	
	@NotNull
    
	private String courseName;
	
	@NotEmpty(message="Course Description should not be empty")
	
	@NotNull
	
	private String courseDescription;
	
	@NotNull(message="duration is required")
	
	private String courseDuration;
	
	
	
	
	
	
	@ManyToOne(fetch=FetchType.EAGER)
	
	@NotNull(message="institute Selection is mandatory")
	
	private InstituteModel institute;
	
	
	@OneToMany(mappedBy="course",cascade=CascadeType.ALL)
	
	@JsonIgnore
	
	private Set<Admission> admissions=new LinkedHashSet<>();
	
	
	
	
	
	public Set<Admission> getAdmissions() {
	
		return admissions;
	}
	
	public void setAdmissions(Set<Admission> admissions) {
	
		this.admissions = admissions;
	
	}
	
	public InstituteModel getInstitute() {
	
		return institute;
	
	}
	
	public void setInstitute(InstituteModel institute) {
	
		this.institute = institute;
	
	}
	
	
	public int getCourseId() {
	
		return courseId;
	
	}
	
	public void setCourseId(int courseId) {
	
		this.courseId = courseId;
	
	}
	
	public String getCourseName() {
	
		return courseName;
	
	}
	
	public void setCourseName(String courseName) {
	
		this.courseName = courseName;
	
	}
	
	public String getCourseDescription() {
	
		return courseDescription;
	
	}
	
	public void setCourseDescription(String courseDescription) {
	
		this.courseDescription = courseDescription;
	
	}
	
	public String getCourseDuration() {
	
		return courseDuration;
	
	}
	
	public void setCourseDuration(String courseDuration) {
	
		this.courseDuration = courseDuration;
	
	}
	
	
	public CourseModel() {
		
	}
	
	public CourseModel(String courseName, String courseDescription, String courseDuration) {
	
		super();
		
		this.courseName = courseName;
		
		this.courseDescription = courseDescription;
		
		this.courseDuration = courseDuration;
		
		
		
	}

	

}
