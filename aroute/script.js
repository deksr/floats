console.log("route app scripts")



var app = angular.module('routeapp', ['ngRoute'])

app.config(function ($routeProvider){

	 $routeProvider
	 .when('/', {
	    templateUrl : 'views/one.html',
	    controller  : 'somecontroller'
    })
	 .when('/about', {
      templateUrl : 'views/two.html',
      controller  : 'aboutController'
    })


})

app.controller('somecontroller', function($scope){
	$scope.message = 'This is a message from somecontroller';
})

app.controller('aboutController', function($scope){
	$scope.message = 'This is a message from aboutController';
})
