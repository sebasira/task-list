// Define Angular module for the app (same as ng-app on HTML)
var app = angular.module('taskList',[]);

// TASK CONTROLLER
//----------------
app.controller('tasksController', function($scope, $http) {
  getTask(); // Load all available tasks 
  function getTask(){  
  $http.post("ajax/getTasks.php").success(function(data){
        $scope.tasks = data;
       });
  };
  
});
