angular.module("navCtrlModule", [])
       .controller("navCtrl", function($scope, shopcarList, $location) {
       		$scope.sitename = "艳艳的商城";
       		$scope.totalNumber = 0;

       		$scope.$watch(function(){
       			return shopcarList;
       		}, function(){
       			var totalNumber = 0;
       			angular.forEach(shopcarList, function(item){
       				totalNumber += item.number;
       			})
       			$scope.totalNumber = totalNumber;
       		}, true)


                     //跳转到购物车
                     $scope.goShopcar = function(){
                     
                            $location.url("/shopcar");
                     }
       })