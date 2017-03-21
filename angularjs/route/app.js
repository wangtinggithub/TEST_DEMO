var app=angular.module("route",['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	 $urlRouterProvider.otherwise('/login');  
    $stateProvider  
    	.state('login', {  
            url: '/login',  
            templateUrl: 'tpls/login.html',
            controller:'loginCtrl'
        }) 
        .state('index', {  
            url: '/index',  
            templateUrl: 'tpls/index.html'  
        })
        .state('index.home', {  
            url: '/home',  
            templateUrl: 'tpls/home.html'  
        })
        .state('index.config', {  
            url: '/config',  
            templateUrl: 'tpls/config.html'  
        })
		.state('index.juece', {  
            url: '/juece',  
            templateUrl: 'tpls/juece.html'  
        })
	
}])
app.controller("loginCtrl",['$scope','$location',function($scope,$location){
	$scope.test="得失"
	$scope.login=function(){
		$location.path('/index');
	}
	
}])
