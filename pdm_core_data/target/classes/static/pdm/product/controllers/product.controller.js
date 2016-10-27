/**
 *  Product Controller
 */

(function(){
    
    angular.module("pdmApp")
    
           .controller("ProductController",ProductController);
    
    ProductController.$inject=['$scope','$state','$stateParams','ProductService'];
    
    function ProductController($scope,$state,$stateParams,ProductService){
        
        console.info("Inside Product Controller ");
        var vm = this;
        vm.create = create;
        vm.list = list;
        vm.init = init;
        vm.view =view;
        
        init();
        
        function init(){
        	if($scope.products === undefined){
        		  list();
        	}
          
        }
        
        
        /**
        * To Save Product
        */
        function create(){
        	
        	ProductService.create(vm.product).then(
  				  //on success
  				function(response){
  					$scope.disable = true;
  					if(response.error==undefined){
  						// FlashService.Succes("Booking reference number "+response.bookingId);	
  					}else{
  						$scope.disable = false;
  						//FlashService.Error(response.error.description);
  					}
  					
  				}/*,
  				// on failure
  				function(response){
  					$scope.disable = true;
  					 FlashService.Error(response.error.description);
  				}*/
  			);
            
            
        }
        /**
        *  To list all Products
        */
        
        function list(){
            
            ProductService.list().then( 
	                  function(response) {    
	                     $scope.products = response._embedded.product;
	                     /* var n = str.lastIndexOf('/');
	                      var id = str.substring(n + 1);*/
	                    });
        }
        
        /***
        * To view the product
        */
        function view(selfLink){
        	console.info("Url "+selfLink)
        	ProductService.view(selfLink).then(
        			function(response){
        				$scope.product = response;
        				$state.go("viewProduct");
        			});
            
        	
        	
        }
        
    }
    
    // To open BookingList window for the particular Booking ID
	 function openIdWindow(index){
		 var selectedBooking =  $scope.bookingsList[index];
        $scope.booking = selectedBooking;
        $scope.bookinfoVendor=  $scope.booking.vendor;
		
		 var dialog =  ngDialog.open({
            template: 'booking/booking.id.view.html',
            controller: 'BookingController',
            className: 'ngdialog-theme-plain',
            closeByDocument: false,
            scope : $scope
        });
   		 
   		
	 }
    
})();