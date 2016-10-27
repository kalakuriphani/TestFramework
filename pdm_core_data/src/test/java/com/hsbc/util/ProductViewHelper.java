package com.hsbc.util;

import java.util.ArrayList;
import java.util.List;

import com.hsbc.pdm.persistence.entity.ProductView;
import com.hsbc.pdm.persistence.entity.ViewAttributes;

public class ProductViewHelper {

	/**
	 * 
	 * @return
	 */
	public static ProductView getAllProductView(){
		//List<ProductView> productViews = new ArrayList<ProductView>();
		ProductView pv1 = new ProductView();
		pv1.setId("7");
		pv1.setProductType("BCA");
		pv1.setRole("Maker");
		pv1.setAttributes(getAllViewAttributes());
		
		return pv1;
	}
	
	/**
	 * 
	 * @return
	 */
	public static List<ViewAttributes> getAllViewAttributes(){
		List<ViewAttributes> attributes = new ArrayList<ViewAttributes>();
		
		ViewAttributes at1 = new ViewAttributes();
		//at1.setId(5);
		at1.setLabel("Product Name 1:");
		at1.setModel("name");
		at1.setType("Text");
		at1.setMultiple(false);
		at1.setValidation("required");
		attributes.add(at1);
		
		
		ViewAttributes at2 = new ViewAttributes();
		//at2.setId(4);
		at2.setLabel("Product Type 2");
		at2.setModel("type");
		at2.setType("Radio");
		at2.setMultiple(false);
		attributes.add(at2);
		
		
		ViewAttributes at3 = new ViewAttributes();
		//at3.setId(5);
		at3.setLabel("Product Description");
		at3.setModel("description");
		at3.setType("Text");
		at3.setMultiple(false);
		at3.setValidation("Required");
		attributes.add(at3);
		
		
		ViewAttributes at4 = new ViewAttributes();
		//at4.setId(5);
		at4.setLabel("Country");
		at4.setModel("country");
		at4.setType("Text");
		at4.setMultiple(false);
		at4.setValidation("Required");
		attributes.add(at4);
		
		
		return attributes;
	}
	
	
}
