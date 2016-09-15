/*MI APLICACION ANGULAR JS*/
var miApp = angular.module('CursoIngresoJS', ['ui.router']);

miApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state(
    	"MenuInicio", {
    		url:"/MenuInicio",
    		templateUrl:"Partes/MenuInicio/menuInicio.html",
    		controller:"controlMenu"
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
					controller:"controlMenu"
				}
			}
		}
	)
    .state(
		"MenuInicio.AdivinaNumero1", {
			url:"/salaJuegos/AdivinaNumero1",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/AdivinaElNumero1.html",
					controller:"controlAdivinaNumero1"
				}
			}
		}
	)
	.state(
		"MenuInicio.AdivinaNumero2", {
			url:"/salaJuegos/AdivinaNumero2",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/AdivinaElNumero2.html",
					controller:"controlAdivinaNumero2"
				}
			}
		}
	)
	.state(
		"MenuInicio.PiedraPapelTijera1", {
			url:"/salaJuegos/PiedraPapelTijera1",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/PiedraPapelTijera1.html",
					controller:"controlPiedraPapelTijera1"
				}
			}
		}
	)
	.state(
		"MenuInicio.PiedraPapelTijera2", {
			url:"/salaJuegos/PiedraPapelTijera2",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/PiedraPapelTijera2.html",
					controller:"controlPiedraPapelTijera2"
				}
			}
		}
	)
	.state(
		"MenuInicio.AgilidadAritmetica1", {
			url:"/salaJuegos/AgilidadAritmetica1",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/AgilidadAritmetica1.html",
					controller:"controlAgilidadAritmetica1"
				}
			}
		}
	)
	.state(
		"MenuInicio.AgilidadAritmetica2", {
			url:"/salaJuegos/AgilidadAritmetica2",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/AgilidadAritmetica2.html",
					controller:"controlAgilidadAritmetica2"
				}
			}
		}
	)
	.state(
		"MenuInicio.ReflejosDaltonicos", {
			url:"/salaJuegos/ReflejosDaltonicos",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/ReflejosDaltonicos1.html",
					controller:"controlReflejosDaltonicos"
				}
			}
		}
	)
	.state(
		"MenuInicio.RisingBTL", {
			url:"/salaJuegos/RisingBTL",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/RisingBTL.html",
					controller:"controlRisingBTL"
				}
			}
		}
	)
	.state(
		"MenuInicio.FonteCristo", {
			url:"/salaJuegos/FonteCristo",
			views:{
				"juegos":{
					templateUrl:"Partes/SalaJuegos/FonteCristo.html",
					controller:"controlFonteCristo"
				}
			}
		}
	)

    $urlRouterProvider.otherwise("/MenuInicio");
});

miApp.controller('controlMenu', function($scope, $state){
	$scope.irLogin=function(){
		$state.go("MenuInicio.login");
	};
	$scope.irSala=function(){
		$state.go("MenuInicio.salaJuegos");
	};
	
	$scope.irJuego=function($numero){

		switch($numero)
		{
			case 1:
				$state.go("MenuInicio.AdivinaNumero1");
				break;
			case 2:
				$state.go("MenuInicio.AdivinaNumero2");
				break;
			case 3:
				$state.go("MenuInicio.PiedraPapelTijera1");
				break;
			case 4:
				$state.go("MenuInicio.PiedraPapelTijera2");
				break;
			case 5:
				$state.go("MenuInicio.AgilidadAritmetica1");
				break;
			case 6:
				$state.go("MenuInicio.AgilidadAritmetica2");
				break;
			case 7:
				$state.go("MenuInicio.ReflejosDaltonicos");
				break;
			case 8:
				$state.go("MenuInicio.RisingBTL");
				break;
			case 9:
				$state.go("MenuInicio.FonteCristo");
				break;	
			default:
				break;
		}	

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

miApp.controller('controlAdivinaNumero1', function($scope){
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

miApp.controller("controlAdivinaNumero2", function($scope) {
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

miApp.controller('controlPiedraPapelTijera1', function($scope){
});
miApp.controller('controlPiedraPapelTijera2', function($scope){
});
miApp.controller('controlAgilidadAritmetica1', function($scope){
});
miApp.controller('controlAgilidadAritmetica2', function($scope){
});
miApp.controller('controlReflejosDaltonicos', function($scope){
});
miApp.controller('controlRisingBTL', function($scope){
});
miApp.controller('controlFonteCristo', function($scope){
});