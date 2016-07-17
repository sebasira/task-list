// Define Angular module for the app (same as ng-app on HTML)
var app = angular.module('taskList',[]);

// TASK CONTROLLER
//----------------
app.controller('taskController', function($scope, $http){
	getTasks();		// Load available tasks

	// FUNCTION: getTasks
	function getTasks(){
		$http.post("ajax/getTasks.php").success(function(data){
			$scope.tasks = data;
		});
	};

});