package demo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;


public interface UserRepository extends CrudRepository<Users, Long> {	  
	 public Users findByUsername(String username);
	
	 public Users findById(long id); 
	}
