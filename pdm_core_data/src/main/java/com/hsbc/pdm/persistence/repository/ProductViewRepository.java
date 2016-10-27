package com.hsbc.pdm.persistence.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hsbc.pdm.persistence.entity.ProductView;


@RepositoryRestResource(collectionResourceRel = "productview", path = "productview")
public interface ProductViewRepository extends MongoRepository<ProductView, String> {

}
