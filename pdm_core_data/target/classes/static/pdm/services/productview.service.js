/**
 * 
 */

(function(){
    
    'use strict';
    angular.module("pdmApp")
           .factory("ProductViewService",ProductViewService);
    ProductViewService.$inject = ['$resource','$q'];
    
    function ProductViewService($resource,$q,config){
    
    	  var ProductView = $resource("http://localhost:8080/productview/:id");
          
          var services ={};
          services.getViewAttributes = getViewAttributes;
          return services;
    	
          
          function getViewAttributes(id){
        	  var deferred = $q.defer();
       	   var response =  ProductView.get({id:id});
              response.$promise.then(function(data){
                      deferred.resolve(data); 
                   });
              return deferred.promise
          }
          
    }
    
    
    
})();