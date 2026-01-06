angular.module("ToDoListApp",["LocalStorageModule"])
    /**
     * La caracteristica principal de los factories es que retorna un objeto
     * denominado "todoListService" que expone metodos sobre administracion de activiades
     * Lo que se hace en esta seccion es crear los metodos del objeto
     * 
     * El TodoListSevice construido como factory se ejecuta como funcion por eso debe 
     * retornar un objeto, en este caso es todoListService y desde el controlador sera
     * llamado como una funcion toDoListService()
     */
    .factory("ToDoListService", function(localStorageService){
        var todoListService = {};
        todoListService.key = "angular-todolist";

        if(localStorageService.get("angular-todolist")){
            todoListService.activities = localStorageService.get(todoListService.key);
        } else {
            todoListService.activities = [];
        }

        // Obtiene todas las actividades
        todoListService.getAll = function(){
            return todoListService.activities;
        }

        // Agrega una nueva actividad
        todoListService.addActivity = function(newActivity){
            todoListService.activities.push(newActivity);
            todoListService.updateLocalStorage();
        }

        // Remueve una actividad
        todoListService.removeActivity = function(activity){
            todoListService.activities = todoListService.activities.filter(function(act){
                return act !== activity;
            });
            todoListService.updateLocalStorage();
            return todoListService.getAll();
        }

        // Resetea la lista de actividades
        todoListService.clear = function(){
            todoListService.activities = [];
            todoListService.updateLocalStorage();
            return todoListService.getAll();
        }

        // Actualiza el almacenamiento
        todoListService.updateLocalStorage = function(){
            localStorageService.set(todoListService.key, todoListService.activities);
        }

        return todoListService;
    })
    /**
     * El controlador es el encargado de administrar las actividades
     * Lo que se hace en esta seccion es crear los metodos del controlador
     * y cuanddo se agrega el servicio, se inyecta automaticamente en el controlador
     */
    .controller("ToDoListController", function($scope, ToDoListService){
        $scope.newActivity = {};
        $scope.todo = ToDoListService.getAll();

        $scope.addActivity = function(){
            ToDoListService.addActivity($scope.newActivity);
            $scope.newActivity = {};
        }
        $scope.removeActivity = function(activity){
            console.log(activity);
            $scope.todo = ToDoListService.removeActivity(activity);
        }
        $scope.clear = function(){
            $scope.todo = ToDoListService.clear();
        }
    });