package com.hsbc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 
 * @author kalakuriphani
 * 
 *
 */


@SpringBootApplication
public class PDMApplication{
	
	
	
	public static void main(String[] args) {
		SpringApplication.run(PDMApplication.class, args);
	}
	
	/* @Bean
	    public Server rsServer() {
	        JAXRSServerFactoryBean endpoint = new JAXRSServerFactoryBean();
	        endpoint.setBus(bus);
	        endpoint.setAddress("/");
	        // Register 2 JAX-RS root resources supporting "/sayHello/{id}" and "/sayHello2/{id}" relative paths
	        endpoint.setServiceBeans(Arrays.<Object>asList(new ProductRepository()));
	        //endpoint.setFeatures(Arrays.asList(new Swagger2Feature()));
	        return endpoint.create();
	    }*/
}