angular.module("productServiceModule", [])
       .constant("queryProductApi", "http://localhost/H510/api/product.php?a=query")
       .service("productService", function($http, queryProductApi) {
       		this.requestData = function(success, error){
       			$http({
       				url:queryProductApi,
       			}).then(success, error)
       		}
       })