// Define Angular module for the app (same as ng-app on HTML)
var app = angular.module('taskList',[]);

// TASK CONTROLLER
//----------------
app.controller('tasksController', function($scope, $http){
  getTasks();   // Load available tasks

  // FUNCTION: getTasks
  function getTasks(){
    $http.post("ajax/getTasks.php").success(function(data){
      $scope.tasks = data;
    });
  };

  // FUNCTION: addTask
  function addTask(task){
    $http.psot("ajax/addTask.php?task="+task).success(function(data){
      getTasks();     // Refresh Task List
      clearTaskInput();
    });
  };

  // FUNCTION: deleteTask
  function deleteTask(taskID){
    $http.post("ajax/deleteTask.php?taskID="+taskID).success(function(data){
      getTasks();     // Refresh Task List
    });
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
});
/*
// TASK CONTROLLER
//----------------
app.controller('taskController', function($scope, $http){
  getTasks();   // Load available tasks

  // FUNCTION: getTasks
  function getTasks(){
    $http.post("ajax/getTasks.php").success(function(data){
      $scope.tasks = data;
    });
  };

  // FUNCTION: addTask
  function addTask(task){
    $http.psot("ajax/addTask.php?task="+task).success(function(data){
      getTasks();     // Refresh Task List
      clearTaskInput();
    });
  };

  // FUNCTION: deleteTask
  function deleteTask(taskID){
    $http.post("ajax/deleteTask.php?taskID="+taskID).success(function(data){
      getTasks();     // Refresh Task List
    });
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
});
*/