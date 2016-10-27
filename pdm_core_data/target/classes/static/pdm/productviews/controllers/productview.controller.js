/**
 * ProductViewController - This js is used to load all the product attributes based
 */

(function(){
    
    angular.module("pdmApp")
    
           .controller("ProductViewController",ProductViewController);
    
    ProductViewController.$inject=['$scope','$state','$stateParams','ProductViewService','ProductService','ValidationService'];
    
    function ProductViewController($scope,$state,$stateParams,ProductViewService,ProductService,ValidationService){
    var vm = this;
    vm.getAttributes = getAttributes;
    console.info("StateParams Id "+$stateParams.id);
   
    vm.load =load;
    vm.create=create;
    
    load();
    
    function load(){
    	 var id = $stateParams.id;
    	getAttributes(id);
    }
    
    
    function create(){
    	console.info("Create method called");
    	var product = new Object();
    	 angular.forEach($scope.vAttributes, function(attribute,cIndex){
    		 console.info("name "+ attribute.label + " Model "+attribute.model+" Value "+ attribute.value);
    		 product[attribute.model] =attribute.value;
    		 
           
      });
    	 var isValid = ValidationService.validate($scope.vAttributes);
    	 
    	 
    	 ProductService.create(product).then(
 				  //on success
 				function(response){
 					$state.go("products");
 					
 				}
 			);
    	
    }
    
    /***
     * 
     * @returns
     */
    function getAttributes(id){
    ProductViewService.getViewAttributes(id).then( 
            function(response) {    
               $scope.vAttributes = response.attributes;
              });
    }
    }
})();