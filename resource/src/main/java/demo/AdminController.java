package demo;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
 
@Controller
public class AdminController {
 @Autowired
 PersonRepository personRepository;
 
    
    @RequestMapping(value = "/people/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteUser(@PathVariable Long id) throws Exception {
   personRepository.delete(id);
    }
@RequestMapping(value = "/people", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Users> getDetails() throws Exception {
    	return personRepository.findAll();
    }
@RequestMapping(value = "/people", method = RequestMethod.POST)
@ResponseBody
public  Users postDetails(@RequestBody Users user)throws Exception {
	return  personRepository.save(user);	
} 		

}
