package demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
@PreAuthorize("permitAll")
public interface PersonRepository extends CrudRepository<Person, Long> {
	
	  
	 @PreAuthorize("hasRole('ROLE_ADMIN')")
	  @Override
	   Iterable<Person> findAll();
	
	 @PreAuthorize("permitAll")
	 @Override
	   Person findOne(Long id);
	 
	}
