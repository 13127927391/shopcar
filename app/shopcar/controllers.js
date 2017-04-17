angular.module("shopcarCtrlModule", [])
       .controller("shopcarCtrl", function($scope, shopcarList){

       		//购物车信息
       		$scope.shopcarList = shopcarList;
       		//定义购物车商品的总价
	   		$scope.totalPrice = 0;

       		//修改购物车数量
	   		$scope.minusNumber = function(item){
	   			if (item.number <= 1) {
	   				item.number = 1;
	   			} else {
	   				item.number --;
	   			}

	   		}

	   		$scope.addNumber = function(item){
	   			item.number ++;
	   		}


	   		//删除购物车一条商品
	   		$scope.deleteShopcar = function(key){
	   			delete $scope.shopcarList[key];
	   		}

	   		//清空购物车
	   		$scope.clearAll = function(){
	   			$scope.shopcarList = {};
	   		}


	   		//监听总价的变化
	   		$scope.$watch("shopcarList", function(){
	   			
	   			var total = 0;

	   			angular.forEach($scope.shopcarList, function(item){
	   				total += item.number * item.price;
	   			})

	   			$scope.totalPrice = total;

	   		}, true)

       })