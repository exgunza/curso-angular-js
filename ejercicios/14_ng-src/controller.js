angular.module("MyAppModule",[])
    .controller("FirstController", function($scope, $http){
        $scope.repos = [];
        $http.get("https://api.github.com/users/exgunza/repos")
            //1ra forma de como manejar promesas
            /*.then(function(data){
                $scope.repos = data.data;
                console.log(data);
            }, function(err){
                console.log(err);
            });*/
            //2da forma de como manejar promesas
            .success(function(data){
                $scope.repos = data;
            })
            .error(function(err){
                console.log(err);
            });
    });