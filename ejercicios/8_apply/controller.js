angular.module("MainModule", [])
    .controller("FirstController", function($scope){
        $scope.nombre = "Estalin";
        $scope.nombre_sin_apply = "Nombre SIN APPLY";
        $scope.nombre_con_apply = "Nombre CON APPLY";
        /*setTimeout(function(){
            //$apply -> $digest -> watcher
            $scope.$apply(function(){
                $scope.nombre = "Estalin Gunza";
                console.log($scope.nombre);
            });
        }, 2000);*/

        document.querySelector("#mi_boton_sin_apply").addEventListener("click", function(){
            $scope.nombre_sin_apply = "Nombre cambiando SIN APPLY";
            console.log($scope.nombre);
        })
        document.querySelector("#mi_boton_con_apply").addEventListener("click", function(){
            $scope.$apply(function(){
                $scope.nombre_con_apply = "Nombre cambiado CON APPLY";
                console.log($scope.nombre);
            });
        })
    });