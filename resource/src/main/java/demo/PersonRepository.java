package demo;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;

@RepositoryRestResource(collectionResourceRel = "people", path = "people")
@PreAuthorize("hasRole('permitAll')")
public interface PersonRepository extends CrudRepository<Person, Long> {
	  @PreAuthorize("hasRole('isAnonymous()')")
	  @Override
	  Iterable<Person> findAll();	
	}
