/*MI APLICACION ANGULAR JS*/
var miApp = angular.module('CursoIngresoJS', []);

miApp.controller('controlLogin', function($scope){

	$scope.usuario = {};
	$scope.usuario.nombre = "";
	$scope.usuario.password = "";

	$scope.Loguearse = function(){
		console.log("Me estoy logueando");
		console.log($scope.usuario);
	}
});