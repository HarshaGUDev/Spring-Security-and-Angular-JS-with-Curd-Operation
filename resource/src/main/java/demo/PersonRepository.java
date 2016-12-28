package demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
@PreAuthorize("hasRole('ROLE_ADMIN')")
public interface PersonRepository extends CrudRepository<Person, Long> {
	
	  @Override
	  @PreAuthorize("hasRole('ROLE_ADMIN')")
	   Iterable<Person> findAll();
	}
