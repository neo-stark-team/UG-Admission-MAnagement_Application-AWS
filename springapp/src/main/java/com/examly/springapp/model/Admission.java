package com.examly.springapp.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

@Entity
public class Admission {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int admissionId;
	
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@NotNull
	private Student student;
    
	// @OneToOne(mappedBy="admission")
	// @JsonIgnore
	// private User user;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@NotNull
	private CourseModel course;
	
	
//	@ManyToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
//	private Institute institut;
	
	
	
	@ManyToOne(fetch=FetchType.EAGER)
	private AdmissionStatus admissionStatus;
	
	
	


	public AdmissionStatus getAdmissionStatus() {
		return admissionStatus;
	}


	public void setAdmissionStatus(AdmissionStatus admissionStatus) {
		this.admissionStatus = admissionStatus;
	}


	public int getAdmissionId() {
		return admissionId;
	}


	public void setAdmissionId(int admissionId) {
		this.admissionId = admissionId;
	}


	public CourseModel getCourse() {
		return course;
	}


	public void setCourse(CourseModel course) {
		this.course = course;
	}


	public Student getStudent() {
		return student;
	}


	public void setStudent(Student student) {
		this.student = student;
	}


//	public Institute getInstitut() {
//		return institut;
//	}
//
//
//	public void setInstitut(Institute institut) {
//		this.institut = institut;
//	}


	public Admission() {
		
	}


	public Admission(Student student, CourseModel course, AdmissionStatus admissionStatus) {
		super();
		this.student = student;
		this.course = course;

		this.admissionStatus = admissionStatus;
	}
	
	
	
	
}

