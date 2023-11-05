var MyApp = angular.module("mylist" , []);

MyApp.controller("todoController" , function($scope){
    $scope.items = ["banana" , "carrot", "cabbage"];
    $scope.newItems = "";

   $scope.addItems  = function (){
       $scope.items.push($scope.newItems);
       $scope.newItems = "";
    }
    $scope.deleteItems = function(index){
        $scope.items.splice(index , 1);
    }
})