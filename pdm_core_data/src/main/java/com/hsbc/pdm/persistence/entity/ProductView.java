package com.hsbc.pdm.persistence.entity;

import java.util.List;

public class ProductView {
	
	private String id;
	
	private String role;
	
	private String productType;
	
	private List<ViewAttributes> attributes;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}



	public List<ViewAttributes> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<ViewAttributes> attributes) {
		this.attributes = attributes;
	}
	
	

}
