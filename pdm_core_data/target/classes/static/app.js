/**
 * 
 */

(function(){
    
    angular.module('pdmApp',['ngRoute','ngResource','ui.router','smart-table'])
        .config(config);
    
    
    config.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
    
    function config($stateProvider,$urlRouterProvider, $locationProvider){
        
        console.info("Inside PDMApp Module")
        
         $urlRouterProvider.otherwise('/products');
        
        $stateProvider
        
              .state('products', {
                    url: '/products',
                    templateUrl: '/pdm/product/views/product.list.html',
                    controller : 'ProductController',
                    controllerAs : 'vm'
            })
            
        
        /*    .state('createProduct', {
                    url: '/createProduct',
                    templateUrl: '/pdm/product/views/product.create.html',
                    controller : 'ProductController',
                    controllerAs : 'vm'
            })*/
           
          
        
            .state('viewProduct', {
                    url: '/viewProduct/:id',
                    templateUrl: '/pdm/product/views/product.view.html',
                    controller : 'ProductController',
                    controllerAs : 'vm'
            })
           
            
            .state('createProduct', {
                url: '/productviews/:id',
                templateUrl: '/pdm/productviews/views/productview.create.html',
                controller : 'ProductViewController',
                controllerAs : 'vm'
        })
       
    }
    
})();