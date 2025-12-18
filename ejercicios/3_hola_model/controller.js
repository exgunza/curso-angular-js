angular.module("MyFirstApp",[])
    .controller("FirstController", function($scope){
        $scope.nuevoComentario = {};
        $scope.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "Usuario a gusto"
            },
            {
                comentario: "Mal tutorial",
                username: "Otro usuario"
            }
        ];
        $scope.agregarComentario = function(){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
        }
    });