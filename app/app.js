// Define Angular module for the app (same as ng-app on HTML)
var app = angular.module('taskList',[]);

// TASK CONTROLLER
//----------------
app.controller('tasksController', function($scope, $http){
  getTasks();   // Load available tasks

  // Give SCOPE to the functions
  $scope.addTask = addTask;
  $scope.deleteTask = deleteTask;


  // FUNCTION: getTasks
  function getTasks(){
    $http.post("ajax/getTasks.php").success(function(data){
      $scope.tasks = data;
    });
  };

  // FUNCTION: addTask
  function addTask(task){
    $http.post("ajax/addTask.php?task="+task).success(function(data){
      getTasks();     // Refresh Task List
      clearTaskInput();
    });
  };

  // FUNCTION: deleteTask
  function deleteTask(taskID){
    if (confirm('Are you sure you want to delete this task?')){
      $http.post("ajax/deleteTask.php?taskID="+taskID).success(function(data){
        getTasks();     // Refresh Task List
      });
    }
  };

  // FUNCTION: toggleStatus
  function toggleStatus(taskID, status){
    if (status == '2'){
      status = '0';
    }else{
      status = '2';
    }
    $http.post("ajax/updateTask.php?taskID="+taskID+"&status="+status).success(function(data){
      getTasks();     // Refresh Task List
    });
  };

  // FUNCTION: clera input
  function clearTaskInput(){
    $scope.taskInput = "";
  };
});