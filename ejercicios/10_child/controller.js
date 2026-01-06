angular.module("MyFirstApp", [])
    .run(function($rootScope){ // Se ejecuta cuando se instancia el modulo con ng-app
        // No es recomendado llenar de variables en el rootScope
        $rootScope.nombre = "Estalin";
        console.log("Valor de $rootScope (no controlador): " + $rootScope.nombre);
    })
    .controller("FirstController", function($scope){
        $scope.nombre = "Xavier";
        console.log("Valor de $scope (controlador): " + $scope.nombre);
        setTimeout(function(){
            $scope.$apply(function(){
                $scope.nombre = "EX";
                console.log("Cambio valor: " + $scope.nombre);
            });
        }, 2000);
    })
    .controller("ChildController", function($scope){
        console.log("Valor de $scope (hijo): " + $scope.nombre);
    });