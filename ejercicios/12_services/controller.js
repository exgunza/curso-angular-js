angular.module("ToDoListApp",["LocalStorageModule"])
    /**
     * Cuando un servicio se crea de la manera tradicional el function(localStorageService)
     * con toda la lógica se convierte en un constructor
     * 
     * Por lo tanto el servicio desde el controlador sera llamado como 
     * se lo hace a un constructor new ToDoListService()
     * 
     * Por lo tanto se elimina el var todoListService = {}; cuando estaba en factory
     * asi como el return todoListService; y los valores de todoListService se
     * reemplaza por this
     */
    .service("ToDoListService", function(localStorageService){

        this.key = "angular-todolist";

        if(localStorageService.get("angular-todolist")){
            this.activities = localStorageService.get(this.key);
        } else {
            this.activities = [];
        }

        // Obtiene todas las actividades
        this.getAll = function(){
            return this.activities;
        }

        // Agrega una nueva actividad
        this.addActivity = function(newActivity){
            this.activities.push(newActivity);
            this.updateLocalStorage();
        }

        // Remueve una actividad
        this.removeActivity = function(activity){
            this.activities = this.activities.filter(function(act){
                return act !== activity;
            });
            this.updateLocalStorage();
            return this.getAll();
        }

        // Resetea la lista de actividades
        this.clear = function(){
            this.activities = [];
            this.updateLocalStorage();
            return this.getAll();
        }

        // Actualiza el almacenamiento
        this.updateLocalStorage = function(){
            localStorageService.set(this.key, this.activities);
        }
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