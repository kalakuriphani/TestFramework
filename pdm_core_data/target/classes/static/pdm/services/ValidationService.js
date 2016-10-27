/**
 * 
 */


(function(){
    
    'use strict';
    angular.module("pdmApp")
           .factory("ValidationService",ValidationService);
    ProductService.$inject = ['$resource','$q'];
    
    /**
     * 
     * @param $resource
     * @param $q
     * @param config
     * @returns
     */
    function ValidationService($resource,$q,config){
    	
    	  var services ={};
    	  
    	  services.isRequired = isRequired;
    	  services.validate = validate;
    	  return services;
    
    	  
    	  function validate(attributes){
    		  var msgs = new Array();
    		  angular.forEach($scope.vAttributes, function(attr,cIndex){
    	    	/*	 console.info("name "+ attribute.label + " Model "+attribute.model+" Value "+ attribute.value);
    	    		 product[attribute.model] =attribute.value;*/
    			  if(attr.required === 'required'){
    				  msg = isRequired(attr.value);
    			  }
    	    		 
    	         msgs.msg = msg;  
    	      });
    	  }
    	  
    	  
    	  function isRequired(fieldName){
    		  var msg;
    		  
    		  if(fieldName!== undefined && fieldName.length<=0){
    			  msg = fieldName +" is required ";
    		  }else{
    			  msg = true;
    		  }
    		  return msg;
    	  }
    	
    }
    
});