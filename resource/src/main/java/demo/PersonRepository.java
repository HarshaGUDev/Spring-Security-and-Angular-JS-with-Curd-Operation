package demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;

@PreAuthorize("permitAll")
public interface PersonRepository extends CrudRepository<Users, Long> {	  
	 @PreAuthorize("hasRole('ROLE_ADMIN')")
	  @Override
	   Iterable<Users> findAll();
	 @PreAuthorize("hasRole('ROLE_ADMIN')")
	 public Users findByUsername(String username);
	 @PreAuthorize("hasRole('ROLE_ADMIN')")
	 public Users findById(long id); 
	}
