angular.module("ToDoListApp", ["LocalStorageModule"])
    .controller("ToDoController", function($scope,localStorageService){
        if(localStorageService.get("angular-todolist")){
            $scope.todo = localStorageService.get("angular-todolist");
        }else{
            $scope.todo = [];
        }
        $scope.newActivity = {};
        /*
            {
                descripcion: "Terminar el curso de AngularJS",
                fecha: "2025-14-04"
            }
        */
        /**
         * $watch permite ejecutar una funcion cada vez que se detecta un cambio
         * en la variable que se le pasa como primer parametro en este caso newActivity
         */
        /*$scope.$watch(function(){
            console.log("Deteccion de cambios")
            return $scope.newActivity;
        }, function(newValue, oldValue){
            console.log(newValue);
            console.log(oldValue);
        });*/

        /**
         * $watchCollection permite ejecutar una funcion cada vez que se detecta un cambio
         * en la coleccion que se le pasa como primer parametro en este caso el nombre es "todo"
         * NO ES LA MEJOR PRACTICA, preferible omitir
         */
        $scope.$watchCollection("todo", function(newValue, oldValue){
            localStorageService.set("angular-todolist", $scope.todo);
        });

        $scope.addActivity = function(){
            $scope.todo.push($scope.newActivity);
            $scope.newActivity = {};
            // Esto comentado no necesario al utilizar watchCollection
            // localStorageService.set("angular-todolist", $scope.todo);
        }
        $scope.clear = function(){
            $scope.todo = [];
            // Esto comentado no necesario al utilizar watchCollection
            // localStorageService.set("angular-todolist", $scope.todo);
        }
    });