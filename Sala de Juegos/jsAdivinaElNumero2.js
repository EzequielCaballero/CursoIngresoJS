/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos,
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var angularJS = angular.module("AdivinaNumeroEj2", []);

angularJS.controller("ControlAdivina2", function($scope) {
	$scope.adivina2 = {};
	$scope.adivina2.numIngresado = "";
	$scope.adivina2.numSecreto = "";
	$scope.adivina2.intentos = "";

	$scope.Verificar = function(){
			var contador = parseInt($scope.adivina2.intentos);
			contador++;

			if(parseInt($scope.adivina2.numIngresado) == $scope.adivina2.numSecreto)
			{
				switch (contador)
				{
					case "1":
						alert("COINCIDENCIA! - Usted es un Psíquico!");
						break;

					case "2":
						alert("COINCIDENCIA! - Excelente percepción!");
						break;

					case "3":
						alert("COINCIDENCIA! - Esto es suerte");
						break;

					case "4":
						alert("COINCIDENCIA! - Excelente técnica");
						break;

					case "5":
						alert("COINCIDENCIA! - Usted está en la media");
						break;

					case "6":
					case "7":
					case "8":
					case "9":
					case "10":
						alert("COINCIDENCIA! - Falta técnica");
						break;

					default:
						alert("COINCIDENCIA! - Suerte en el amor");
						break;
				}
			}
			else
			{
				if(parseInt($scope.adivina2.numIngresado) > $scope.adivina2.numSecreto)
					alert("Se ha pasado!");
				else
					alert("Aún le falta");
			}

			$scope.adivina2.intentos = contador;
	}

	$scope.Comenzar = function(){
		$scope.adivina2.numIngresado = "";
		$scope.adivina2.intentos = "0";
		$scope.adivina2.numSecreto = Math.floor((Math.random() * 100) + 1);
	}

});
