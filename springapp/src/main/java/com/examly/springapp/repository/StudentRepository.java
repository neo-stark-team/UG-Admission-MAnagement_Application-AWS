
package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{

}
