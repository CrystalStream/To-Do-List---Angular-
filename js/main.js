angular.module("ToDoList", ['LocalStorageModule'])
.controller('ToDoController', ['$scope','localStorageService', function($scope,localStorageService){
	if (localStorageService.get("List")){
		$scope.todo = localStorageService.get("List");
	}else{
		$scope.todo = [];
	}	
	$scope.newAct = {};

	$scope.$watchCollection('todo', function(){
		localStorageService.set('List',$scope.todo);
	})
	$scope.addAct = function(){
		$scope.todo.push($scope.newAct);
		$scope.newAct = {};		
	}

	$scope.clean = function(){
		$scope.todo = [];		
	}
}])