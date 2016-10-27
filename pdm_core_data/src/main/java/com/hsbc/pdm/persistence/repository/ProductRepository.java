/**
 * 
 */
package com.hsbc.pdm.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hsbc.pdm.persistence.entity.Product;

/**
 * @author kalakuriphani
 *
 */
//@CrossOrigin(origins = "http://127.0.0.1:55735/", maxAge = 3600)
@RepositoryRestResource(collectionResourceRel = "product", path = "product")
public interface ProductRepository extends MongoRepository<Product, String>{
	
//	public Product findByType(String type);
	

}
