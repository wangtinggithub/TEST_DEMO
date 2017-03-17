var myapp=angular.module("myapp",['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider
	.when('/', '/login')
	.otherwise('/');
	$stateProvider.state("login", {
		url: "/login",
		templateUrl: 'tpls/login.html',
    })
    .state("home",{
    	url:"/home",
    	templateUrl:'tpls/home.html'
    })
}])