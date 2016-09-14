/*MI APLICACION ANGULAR JS*/
var miApp = angular.module('CursoIngresoJS', ['ui.router']);

miApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state(
    	"MenuInicio", {
    		url:"/MenuInicio",
    		templateUrl:"Partes/MenuInicio/menuInicio.html",
    		controller:"controlMenuInicio"
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
    .state(
		"MenuInicio.salaJuegos", {
			url:"/salaJuegos",
			views:{
				"contenido":{
					templateUrl:"Partes/SalaJuegos/salaJuegos.html",
					controller:"controlSalaJuegos"
				}
			}
		}
		)

    $urlRouterProvider.otherwise("/MenuInicio");
});

miApp.controller('controlMenuInicio', function($scope, $state){
	$scope.irLogin=function(){

		$state.go("MenuInicio.login");

	};
	$scope.irSala=function(){

	$state.go("MenuInicio.salaJuegos");

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

miApp.controller('controlSalaJuegos', function($scope){

});