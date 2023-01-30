package com.examly.springapp.model;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class AdmissionStatus {
	
	@Id
	private int admissionStatusId;
	
	private String statusName;
	
	@OneToMany(mappedBy="admissionStatus",fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<Admission> admissions=new LinkedHashSet<>();

	public int getAdmissionStatusId() {
		return admissionStatusId;
	}

	public void setAdmissionStatusId(int admissionStatusId) {
		this.admissionStatusId = admissionStatusId;
	}

	public String getStatusName() {
		return statusName;
	}

	public void setStatusName(String statusName) {
		this.statusName = statusName;
	}

	public Set<Admission> getAdmissions() {
		return admissions;
	}

	public void setAdmissions(Set<Admission> admissions) {
		this.admissions = admissions;
	}

	public AdmissionStatus() {
		
	}

	public AdmissionStatus(int admissionStatusId, String statusName) {
		super();
		this.admissionStatusId = admissionStatusId;
		this.statusName = statusName;
	}
	
}

