angular.module('todoController', [])

// inject the Todo service factory into our controller
.controller('mainController', ['$scope', '$http', '$location', '$anchorScroll', 'Todos', function($scope, $http, $location, $anchorScroll, Todos) {
    $scope.formData = {};
    $scope.loading = true;
    $scope.intro = true;
    $scope.ollaentrada = true;
    $scope.tambor = false;
    $scope.btnintro = false;
    $scope.imagentrada = "img/olla.jpg";
    $scope.termometro = false;
    $scope.pedestalfrontal = false;
    $scope.pedestaltrasero = false;
    $scope.lavado = false;
    $scope.general = false;
    $scope.luces = false;

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the todos
    Todos.get()
        .then(function(data) {
            $scope.todos = data;
            $scope.loading = false;
        });

    $scope.comenzarTodo = function(){
      $scope.intro = false;
      $scope.ollaentrada = false;
      $scope.tambor = true;
      $scope.seccion = "TAMBOR";
      $scope.imagentrada = "img/tambor.jpg";
      $scope.termometro = true;
      $scope.pedestalfrontal = false;
      $scope.pedestaltrasero = false;
      $scope.lavado = false;
      $scope.general = false;
      $scope.luces = false;
    }

    $scope.comenzarPedestalFrontal = function(){
      $scope.intro = false;
      $scope.ollaentrada = false;
      $scope.tambor = false;
      $scope.seccion = "PEDESTAL FRONTAL";
      $scope.imagentrada = "img/pedestalfrontal.jpg";
      $scope.termometro = true;
      $scope.pedestalfrontal = true;
      $scope.pedestaltrasero = false;
      $scope.lavado = false;
      $scope.general = false;
      $scope.luces = false;
      $location.hash('top');
      $anchorScroll();
    }

    $scope.comenzarPedestalTrasero = function(){
      $scope.intro = false;
      $scope.ollaentrada = false;
      $scope.tambor = false;
      $scope.seccion = "PEDESTAL TRASERO";
      $scope.imagentrada = "img/pedestaltrasero.jpg";
      $scope.termometro = true;
      $scope.pedestalfrontal = false;
      $scope.pedestaltrasero = true;
      $scope.lavado = false;
      $scope.general = false;
      $scope.luces = false;
      $location.hash('top');
      $anchorScroll();
    }

    $scope.comenzarLavado = function(){
      $scope.intro = false;
      $scope.ollaentrada = false;
      $scope.tambor = false;
      $scope.seccion = "SISTEMA DE LAVADO";
      $scope.imagentrada = "img/lavado.jpg";
      $scope.termometro = true;
      $scope.pedestalfrontal = false;
      $scope.pedestaltrasero = false;
      $scope.lavado = true;
      $scope.general = false;
      $scope.luces = false;
      $location.hash('top');
      $anchorScroll();
    }

    $scope.comenzarGeneral = function(){
      $scope.intro = false;
      $scope.ollaentrada = false;
      $scope.tambor = false;
      $scope.seccion = "SISTEMA GENERAL";
      $scope.imagentrada = "img/general.jpg";
      $scope.termometro = true;
      $scope.pedestalfrontal = false;
      $scope.pedestaltrasero = false;
      $scope.lavado = false;
      $scope.general = true;
      $scope.luces = false;
      $location.hash('top');
      $anchorScroll();
    }

    $scope.comenzarLuces = function(){
      $scope.intro = false;
      $scope.ollaentrada = false;
      $scope.tambor = false;
      $scope.seccion = "SISTEMA DE LUCES";
      $scope.imagentrada = "img/luces.jpg";
      $scope.termometro = true;
      $scope.pedestalfrontal = false;
      $scope.pedestaltrasero = false;
      $scope.lavado = false;
      $scope.general = false;
      $scope.luces = true;
      $location.hash('top');
      $anchorScroll();
    }

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        if ($scope.formData.fabricante != undefined) {
            $scope.loading = true;
            $scope.btnintro = true;

            // call the create function from our service (returns a promise object)
            Todos.create($scope.formData)

            // if successful creation, call our get function to get all the new todos
            .then(function(data) {
                $scope.loading = false;
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data; // assign our new list of todos
            });
        }
    };

    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $scope.loading = true;

        Todos.delete(id)
            // if successful creation, call our get function to get all the new todos
            .success(function(data) {
                $scope.loading = false;
                $scope.todos = data; // assign our new list of todos
            });
    };


}]);
