package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Rating {
	
	@Id
	@Column(name="rid")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer reviewId;
	
	private Integer rating;

	private String review;
	
	@ManyToOne(fetch=FetchType.EAGER)
	private InstituteModel institute;

	public Rating(Integer rating, String review) {
		super();
		this.rating = rating;
		this.review = review;
	}

	public Rating() {
		super();
	}

	public Integer getReviewId() {
		return reviewId;
	}

	public void setReviewId(Integer reviewId) {
		this.reviewId = reviewId;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public InstituteModel getInstitute() {
		return institute;
	}

	public void setInstitute(InstituteModel institute) {
		this.institute = institute;
	}
	
	

}
