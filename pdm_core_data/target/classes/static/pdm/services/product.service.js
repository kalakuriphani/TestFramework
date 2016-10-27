/**
 * 
 */

(function(){
    
    'use strict';
    angular.module("pdmApp")
           .factory("ProductService",ProductService);
    ProductService.$inject = ['$resource','$q'];
    
    function ProductService($resource,$q,config){
        
            var Products = $resource("http://localhost:8080/product");
            
            var services ={};
        
            services.create = create;
            services.list = list;
            services.view = view;
            return services;
        
            /**
            * To get list
            */
        
            function list(){
               var deferred = $q.defer();
        	   var response =  Products.get();
               response.$promise.then(function(data){
                       deferred.resolve(data); 
                    });
               return deferred.promise
            }
        
            /**
            * 
            */
            function create(product){
            	
            	var deferred = $q.defer();
    			var response = Products.save(product);
    			response.$promise.then(function(data){
    				deferred.resolve(data);
    				//return data.bookingId;
    			});
    			return deferred.promise;
    			
                
            }
    
            /**
             * 
             */
            
            function view(selfLink){
               var product = $resource(selfLink);
               var deferred = $q.defer();
          	   var response =  product.get();
                 response.$promise.then(function(data){
                         deferred.resolve(data); 
                      });
                 return deferred.promise
                
            }
    
    }
    
})();