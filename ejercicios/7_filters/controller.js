angular.module("MainModule",[])
    .filter("removeHtml", function(){
        return function(texto){
            return String(texto).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("FiltersController", function($scope){
        $scope.mi_texto = "<p>Hola Mundo</p>";
        $scope.mi_html = {};
        $scope.mi_html.title = "Titulo";
        $scope.mi_html.body = "Hola Mundo";
        $scope.costo = 2;
    });