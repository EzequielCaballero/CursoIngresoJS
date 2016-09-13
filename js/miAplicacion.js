/*MI APLICACION ANGULAR JS*/
var miApp = angular.module('CursoIngresoJS', ['ui.router']);

miApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state(
    	"MenuInicio", {
    		url:"/MenuInicio",
    		templateUrl:"Partes/MenuInicio/menuInicio.html",
    		controller:"controlMenuPrincipal"

    	}
    	)
    .state(
    	"MenuInicio.login", {
    		url:"/login",
    		views:{
    			"contenido":{
    				templateUrl:"Partes/Login/login.html",
    				controller:"controlLogin"
    			}
    		}

    	}
    	)

    $urlRouterProvider.otherwise("/MenuInicio");
});

miApp.controller('controlMenuPrincipal', function($scope, $state){
	$scope.irLogin=function(){

		$state.go("MenuInicio.login");

	};
});

miApp.controller('controlLogin', function($scope){

	$scope.usuario = {};
	$scope.usuario.nombre = "";
	$scope.usuario.password = "";

	$scope.Loguearse = function(){
		console.log("Me estoy logueando");
		console.log($scope.usuario);
	}
});