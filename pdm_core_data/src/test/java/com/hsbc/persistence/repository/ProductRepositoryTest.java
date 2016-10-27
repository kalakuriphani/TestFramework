package com.hsbc.persistence.repository;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.hsbc.PDMApplicationTest;
import com.hsbc.pdm.persistence.entity.Product;
import com.hsbc.pdm.persistence.repository.ProductRepository;

public class ProductRepositoryTest extends PDMApplicationTest{
	
	@Autowired
	private ProductRepository productRepository;
	
	
	@Test
	public void testCreateProduct(){
		
		Product lProduct = new Product();
		lProduct.setId("1");
		lProduct.setName("Commercial Loan");
		lProduct.setType("Private Banking");
		if(!productRepository.exists(lProduct.getId())){
			productRepository.save(lProduct);
			System.out.println("Product Saved Successfully "+lProduct.getId());
		}else{
			Product product = productRepository.findOne("1");
			assertEquals("1",product.getId());
		}
		
	}
	

}
