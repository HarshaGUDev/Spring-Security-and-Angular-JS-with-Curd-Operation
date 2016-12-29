package demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
@PreAuthorize("permitAll")
public interface PersonRepository extends CrudRepository<Users, Long> {
	
	  
	 @PreAuthorize("hasRole('ROLE_ADMIN')")
	  @Override
	   Iterable<Users> findAll();
	
	
	 
	}
