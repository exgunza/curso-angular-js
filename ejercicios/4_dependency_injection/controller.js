angular.module("MyFirstApp", [])
    .controller("FirstController", ["$scope", function(scp){
        scp.nuevoComentario = {};
        scp.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "XXXXXXXXXXXXXX"
            },
            {
                comentario: "Mal tutorial",
                username: "YYYYYYYYYYYYYY"
            }
        ];
        scp.agregarComentario = function(){
            scp.comentarios.push(scp.nuevoComentario);
            scp.nuevoComentario = {};
        }
    }]);