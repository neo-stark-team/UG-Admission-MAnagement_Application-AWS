package com.examly.springapp.repository;   
     
//import the packages
import org.springframework.data.jpa.repository.JpaRepository;    
import org.springframework.stereotype.Repository;   
import org.springframework.data.jpa.repository.Query;   
import org.springframework.data.repository.query.Param;      
import com.examly.springapp.model.InstituteModel;    
import java.util.List;      
      
@Repository      
public interface InstituteRepository extends JpaRepository<InstituteModel, Integer>{     
         

    public InstituteModel findByInstituteName(String instituteName);             
    public InstituteModel findByInstituteAddress(String instituteAddress);       
    public InstituteModel findByMobile(String mobile);     
    public InstituteModel findByEmail(String email);                
}                
                  
            
