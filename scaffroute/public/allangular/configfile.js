console.log("this is config file")

var app = angular.module('appname', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('', {
    templateUrl: '',
    controller: ''
  })
  .otherwise({
    redirectTo: ''
  });
})

app.controller("somecontroller", function($scope){
	$scope.message = "This is a message from some controller"
})
