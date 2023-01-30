package com.examly.springapp.serviceimpl; 
import java.util.List; 
import java.util.Optional; 
import com.examly.springapp.model.Admission; 
import com.examly.springapp.model.AdmissionStatus; 
import com.examly.springapp.model.Student; 
import com.examly.springapp.model.User; 
import com.examly.springapp.repository.AdmissionRepository; 
import com.examly.springapp.repository.AdmissionStatusRepository; 
import com.examly.springapp.repository.StudentRepository; 
import com.examly.springapp.repository.UserRepository; 
import org.springframework.stereotype.Service; 
import java.util.Set; 
import org.springframework.beans.factory.annotation.Autowired; 

@Service 
public class AdmissionService { 

    @Autowired 
	private AdmissionRepository admrepo; 
	
	@Autowired 
	private AdmissionStatusRepository asr; 
	
	@Autowired 
	private UserRepository userrepo; 
	 
	@Autowired 
	private StudentRepository stur; 
     
    public User saveAdmission(Long userid,Admission admission){ 
        User user=userrepo.findById(userid).get(); 
        AdmissionStatus adms=new AdmissionStatus(1, null); 
	    admission.setAdmissionStatus(adms); 
		user.setAdmission(admission); 
		 
		return this.userrepo.save(user);
    } 

    public Admission editAdmission(Admission admission){ 
         
        return this.admrepo.save(admission); 
    } 
 
    public List<Admission> getAdmissions(){ 
        return this.admrepo.findAll(); 
    } 

    public Admission getAdmission(int admissionId){ 
	    
        return this.admrepo.findById(admissionId).get(); 
    } 

    public Set<Admission> getApproved(){ 
        return this.admrepo.getApplication("APPROVED"); 
    } 
    public Set<Admission> getPending(){ 
        return this.admrepo.getApplication("PENDING"); 
    } 
    public Set<Admission> getRejected(){ 
        return this.admrepo.getApplication("REJECTED"); 
    } 

    public Admission approve(int admissionId){ 
        Admission admission=admrepo.findById(admissionId).get(); 
		AdmissionStatus adms=new AdmissionStatus(2, null); 
		admission.setAdmissionStatus(adms);	 
		return this.admrepo.save(admission); 
    } 

    public Admission reject(int admissionId){ 
        Admission admission=admrepo.findById(admissionId).get(); 
		AdmissionStatus adms=new AdmissionStatus(3, null); 
		admission.setAdmissionStatus(adms);	 
		return this.admrepo.save(admission); 
    } 


} 
 
