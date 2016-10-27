package com.hsbc.pdm.persistence.entity;

public class ProductProperties {

		private String name;
	   
	    private String displayName;
	   
	    private String value;
	   
	    private String type;
	    
	    private boolean isReadOnly;
	   
	    private String lookupId;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getDisplayName() {
			return displayName;
		}

		public void setDisplayName(String displayName) {
			this.displayName = displayName;
		}

		public String getValue() {
			return value;
		}

		public void setValue(String value) {
			this.value = value;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public boolean isReadOnly() {
			return isReadOnly;
		}

		public void setReadOnly(boolean isReadOnly) {
			this.isReadOnly = isReadOnly;
		}

		public String getLookupId() {
			return lookupId;
		}

		public void setLookupId(String lookupId) {
			this.lookupId = lookupId;
		}
	
	
}
