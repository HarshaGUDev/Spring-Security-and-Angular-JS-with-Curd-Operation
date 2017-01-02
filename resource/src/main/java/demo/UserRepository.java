package demo;
import java.security.Principal;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import antlr.collections.List;
@PreAuthorize("isAuthenticated()")
public interface UserRepository extends CrudRepository<Users, Long> {	  
	 public Users findByUsername(String username);
	 
	}
