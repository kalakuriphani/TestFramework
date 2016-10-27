package com.hsbc.persistence.repository;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.hsbc.PDMApplicationTest;
import com.hsbc.pdm.persistence.entity.ProductView;
import com.hsbc.pdm.persistence.repository.ProductViewRepository;
import com.hsbc.util.ProductViewHelper;

public class ProductViewRepositoryTest extends PDMApplicationTest {
	
	
	@Autowired
	ProductViewRepository productViewRepository;
	
	@Before
	public void createProductView(){
		
		productViewRepository.save(ProductViewHelper.getAllProductView());
		
	}
	
 @Test
	public void getProduct(){
	
		ProductView pv = productViewRepository.findOne("5");
		assertEquals("5",pv.getId());
	}
	
	
	
	
}

 



