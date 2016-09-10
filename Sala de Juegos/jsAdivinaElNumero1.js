/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var app = angular.module('CursoJSangular', []);

app.controller('controlAdivinaNumero', function($scope){
	$scope.adivina = {};
	$scope.adivina.numIngresado = "";
	$scope.adivina.contador = "";
	$scope.adivina.numSecreto = "";

	$scope.Verificar = function(){
		var contador = parseInt($scope.adivina.contador);
		contador++;

		if(parseInt($scope.adivina.numIngresado) == $scope.adivina.numSecreto)
			alert("ACERTO! y sólo en " + contador + " intentos// Número secreto: " + $scope.adivina.numSecreto);
		else
		{
				if(parseInt($scope.adivina.numIngresado) > $scope.adivina.numSecreto)
					alert("Se paso!");
				else
					alert("Le falta para llegar!");
		}

		$scope.adivina.contador = contador;
	}

	$scope.Comenzar = function(){
		$scope.adivina.contador = "0";
		$scope.adivina.numSecreto = Math.floor((Math.random() * 10) + 1);
	}
});
