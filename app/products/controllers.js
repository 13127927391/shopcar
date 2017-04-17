angular.module("productCtrlModule", [])
	   .controller("productCtrl", function($scope, productService, shopcarList) {

	   		$scope.productList = [];

	   		productService.requestData(function(res){
                $scope.productList = res.data.data;
            }, function(){

            })


	   		//定义变量 购物车信息
	   		$scope.shopcarList = shopcarList;


            //加入购物车
	   		$scope.addShopcar = function(item){

	   			if ($scope.shopcarList[item.id]) {
	   				//购物车中已经存在
	   				$scope.shopcarList[item.id]["number"] ++;
	   			} else {
	   				//购物车没有改商品
	   				$scope.shopcarList[item.id] = {
		   				name : item.product_name,
		   				price : item.product_price,
		   				image:item.product_image,
		   				number:1

		   			};

	   			}

	   		}
	   		
	   })