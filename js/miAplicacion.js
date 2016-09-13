/*MI APLICACION ANGULAR JS*/
var miApp = angular.module('CursoIngresoJS', ['ui.router']);

miApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state(
    	"MenuPrincipal", {
    		url:"/MenuPrincipal",
    		templateUrl:"Partes/MenuPrincipal/menuPrincipal.html",
    		controller:"controlMenuPrincipal"

    	}
    	)
    .state(
    	"login", {
    		url:"/login",
    		views:{
    			"contenido":{
    				templateUrl:"Partes/Login/login.html",
    				controller:"controlLogin"
    			}
    		}

    	}
    	)

    $urlRouterProvider.otherwise("/MenuPrincipal");
});

miApp.controller('controlMenuPrincipal', function($scope, $state){
	$scope.irLogin=function(){

		$state.go("login");

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