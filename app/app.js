angular.module("myApp", ["ngRoute","productServiceModule", "productCtrlModule", "shopcarCtrlModule", "navCtrlModule"])
	   //购物车信息
       .value("shopcarList", {})

       //路由信息
       .config(function($routeProvider, $locationProvider){
            //去掉！
            $locationProvider.hashPrefix("");

            //路由配置
            $routeProvider
            .when("/product", {
                controller:"productCtrl",
                templateUrl:"views/product.html"
            })
            .when("/shopcar", {
                controller:"shopcarCtrl",
                templateUrl:"views/shopcar.html"
            })
            .otherwise({
                redirectTo:"/product"
            })
       })

























     /*  .controller("mainCtrl", function($scope, productService) {

	   		//定义购物车的数量
	   		$scope.totalNumber = 0;
	   	

	   		//监听购物车信息变化
	   		$scope.$watch("shopcarList", function(){
	   				var totalNumber = 0;
	   				var totalPrice = 0;
	   				//遍历购物车数据
	   				angular.forEach($scope.shopcarList, function(value){
	   					totalNumber += value.number;
	   					totalPrice += value.number * value.price;
	   				})

	   				$scope.totalNumber = totalNumber;
	   				$scope.totalPrice = totalPrice;
	   		}, true)

	   })*/