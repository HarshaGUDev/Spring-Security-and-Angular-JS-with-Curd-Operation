package demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
@PreAuthorize("hasRole('ROLE_USER,ROLE_ADMIN')")
@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface PersonRepository extends CrudRepository<Person, Long> {
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	  @Override
	  Person save(Person s);
	 
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	  @Override
	  void delete(Long aLong);
	  
	  @PreAuthorize("hasRole('ROLE_ADMIN')")
	  @Override
	  Iterable<Person> findAll();
	 
	 
	}
