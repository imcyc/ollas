angular.module('todoController', [])

// inject the Todo service factory into our controller
.controller('mainController', ['$scope', '$http', '$location', '$anchorScroll', 'Todos', function($scope, $http, $location, $anchorScroll, Todos) {
    $scope.formData = {};
    $scope.loading = true;
    $scope.intro = true;
    $scope.ollaentrada = true;
    $scope.tambor = false;
    $scope.btnintro = false;
    $scope.imagentrada = "img/foto-inicio.JPG";
    $scope.termometro = false;
    $scope.secciones = false;
    $scope.pedestalfrontal = false;
    $scope.pedestaltrasero = false;
    $scope.lavado = false;
    $scope.general = false;
    $scope.luces = false;
    $scope.enviando = true;
    $scope.enviado = false;
    $scope.regresar = false;


    $scope.V1 = function() {
        var rtamborD1 = parseFloat($scope.formData.tamborD1);
        var rtamborL1 = parseFloat($scope.formData.tamborL1);
        var rtamborM1 = parseFloat($scope.formData.tamborM1);
        var pi = 3.14159;
        var PI1 = (pi * rtamborD1) / 12;
        var T1 = Math.pow(rtamborL1 - ((6.35 * 2) / 1000), 2);
        var T2 = Math.pow(rtamborM1 - ((6.35 * 2) / 1000), 2);
        var T3 = rtamborL1 - ((6.35 * 2) / 1000);
        var T4 = rtamborM1 - ((6.35 * 2) / 1000);
        var T5 = T3 * T4;
        var T6 = T1 + T2 + T5;
        //return PI1 * T6;
        var V1 = PI1 * T6;

        var zzz = rtamborD1 - 0.0127;
        var zzzz = Math.pow(zzz, 2);
        var yyy = rtamborM1 - 0.0127;
        var yyyy = Math.pow(yyy, 2);

        var xxx = zzzz + yyyy + zzz * yyy;
        var xxxx = xxx * rtamborL1 * 0.261799388;

        return xxxx;


    }

    $scope.V2 = function() {
        var rtamborD2 = parseFloat($scope.formData.tamborD2);
        var rtamborL2 = parseFloat($scope.formData.tamborL2);
        var rtamborM2 = parseFloat($scope.formData.tamborM2);
        var pi = 3.14159;
        var PI1 = (pi * rtamborD2) / 12;
        var T1 = Math.pow(rtamborL2 - ((6.35 * 2) / 1000), 2);
        var T2 = Math.pow(rtamborM2 - ((6.35 * 2) / 1000), 2);
        var T3 = rtamborL2 - ((6.35 * 2) / 1000);
        var T4 = rtamborM2 - ((6.35 * 2) / 1000);
        var T5 = T3 * T4;
        var T6 = T1 + T2 + T5;
        //return PI1 * T6;
        var V2 = PI1 * T6;

        var zzz = rtamborD2 - 0.0127;
        var zzzz = Math.pow(zzz, 2);
        var yyy = rtamborM2 - 0.0127;
        var yyyy = Math.pow(yyy, 2);

        var xxx = zzzz + yyyy + zzz * yyy;
        var xxxx = xxx * rtamborL2 * 0.261799388;

        return xxxx;


    }

    $scope.V3 = function() {
        var rtamborD3 = parseFloat($scope.formData.tamborD3);
        var rtamborL3 = parseFloat($scope.formData.tamborL3);
        var pi = 3.14159;
        var T1 = Math.pow(rtamborD3 - ((6.35 * 2) / 1000), 2);
        var T2 = (3 * pi * rtamborL3) / 12;
        //var T3 = T2 * T1;
        //return T3;
        //var V3 = T3;

        var dd = rtamborD3 - .0127;
        var ddd = Math.pow(dd, 2);
        var T3 = ddd * .2617 * 3 * rtamborL3;
        return T3;
    }



    $scope.V4 = function() {
        var rtamborD4 = parseFloat($scope.formData.tamborD4);
        var rtamborL4 = parseFloat($scope.formData.tamborL4);
        var rtamborM4 = parseFloat($scope.formData.tamborM4);
        var pi = 3.14159;
        var PI1 = (pi * rtamborD4) / 12;
        var T1 = Math.pow(rtamborL4 - ((6.35 * 2) / 1000), 2);
        var T2 = Math.pow(rtamborM4 - ((6.35 * 2) / 1000), 2);
        var T3 = rtamborL4 - ((6.35 * 2) / 1000);
        var T4 = rtamborM4 - ((6.35 * 2) / 1000);
        var T5 = T3 * T4;
        var T6 = T1 + T2 + T5;
        //return PI1 * T6;

        var rtamborD3 = parseFloat($scope.formData.tamborD3);


        var cc = rtamborD3 - .0127;
        var ccc = Math.pow(cc, 2);
        var cccc = rtamborD4 - .0127;
        var ccccc = Math.pow(cccc, 2);



        var cccccc = cc * ccccc * rtamborL4 * 0.261799388;

        var ddd = ccc + cccc + cccccc;
        var zzz = rtamborD4 - 0.0127;
        var zzzz = Math.pow(zzz, 2);
        var yyy = rtamborM4 - 0.0127;
        var yyyy = Math.pow(yyy, 2);
        var xxx = zzzz + yyyy + zzz * yyy;
        var xxxx = xxx * rtamborL4 * 0.261799388;
        return xxxx;
    }

    $scope.V5 = function() {
        var rtamborD5 = parseFloat($scope.formData.tamborD5);
        var rtamborL5 = parseFloat($scope.formData.tamborL5);
        var rtamborM5 = parseFloat($scope.formData.tamborM5);
        var pi = 3.14159;
        var T1 = Math.pow(rtamborD5 - ((6.35 * 2) / 1000), 2);
        var T2 = (pi * rtamborL5 * 3 * rtamborM5) / 12;
        var T3 = T2 * T1;
        //return T3;


        var T25 = ((rtamborD5 - 0.0127) * 2) * 0.48 * 3 * 0.261799388 * rtamborL5;
        return T25;

    }

    $scope.tamborVTotal = function() {
        return ($scope.V1() + $scope.V2() + $scope.V3() + $scope.V4() + $scope.V5())
    }

    $scope.scoreTambor = function() {
        var rTambor1 = parseInt($scope.formData.tambor1);
        var rTambor2 = parseInt($scope.formData.tambor2);
        var rTambor3 = parseInt($scope.formData.tambor3);
        var rTambor4 = parseInt($scope.formData.tambor4);
        var rTambor5 = parseInt($scope.formData.tambor5);
        var rTambor6 = parseInt($scope.formData.tambor6);
        var rTambor7 = parseInt($scope.formData.tambor7);
        var rTambor8 = parseInt($scope.formData.tambor8);
        var rTambor9 = parseInt($scope.formData.tambor9);
        var rTambor10 = parseInt($scope.formData.tambor10);

        if (!rTambor1) { rTambor1 = 0 };
        if (!rTambor2) { rTambor2 = 0 };
        if (!rTambor3) { rTambor3 = 0 };
        if (!rTambor4) { rTambor4 = 0 };
        if (!rTambor5) { rTambor5 = 0 };
        if (!rTambor6) { rTambor6 = 0 };
        if (!rTambor7) { rTambor7 = 0 };
        if (!rTambor8) { rTambor8 = 0 };
        if (!rTambor9) { rTambor9 = 0 };
        if (!rTambor10) { rTambor10 = 0 };

        return rTambor1 + rTambor2 + rTambor3 + rTambor4 + rTambor5 + rTambor6 + rTambor7 + rTambor8 + rTambor9 + rTambor10;
    };

    $scope.scorePedestalFrontal = function() {
        var rPedestal1 = parseInt($scope.formData.pedestal1);
        var rPedestal2 = parseInt($scope.formData.pedestal2);
        var rPedestal3 = parseInt($scope.formData.pedestal3);
        var rPedestal4 = parseInt($scope.formData.pedestal4);
        if (!rPedestal1) { rPedestal1 = 0 };
        if (!rPedestal2) { rPedestal2 = 0 };
        if (!rPedestal3) { rPedestal3 = 0 };
        if (!rPedestal4) { rPedestal4 = 0 };
        return rPedestal1 + rPedestal2 + rPedestal3 + rPedestal4;
    };

    $scope.scorePedestalTrasero = function() {
        var rPedestal5 = parseInt($scope.formData.pedestal5);
        var rPedestal6 = parseInt($scope.formData.pedestal6);
        var rPedestal7 = parseInt($scope.formData.pedestal7);
        var rPedestal8 = parseInt($scope.formData.pedestal8);
        var rPedestal9 = parseInt($scope.formData.pedestal9);
        if (!rPedestal5) { rPedestal5 = 0 };
        if (!rPedestal6) { rPedestal6 = 0 };
        if (!rPedestal7) { rPedestal7 = 0 };
        if (!rPedestal8) { rPedestal8 = 0 };
        if (!rPedestal9) { rPedestal9 = 0 };
        return rPedestal5 + rPedestal6 + rPedestal7 + rPedestal8 + rPedestal9;
    };

    $scope.scoreLavado = function() {
        var rLavado1 = parseInt($scope.formData.lavado1);
        var rLavado2 = parseInt($scope.formData.lavado2);
        var rLavado3 = parseInt($scope.formData.lavado3);
        var rLavado4 = parseInt($scope.formData.lavado4);
        var rLavado5 = parseInt($scope.formData.lavado5);
        if (!rLavado1) { rLavado1 = 0 };
        if (!rLavado2) { rLavado2 = 0 };
        if (!rLavado3) { rLavado3 = 0 };
        if (!rLavado4) { rLavado4 = 0 };
        if (!rLavado5) { rLavado5 = 0 };
        return rLavado1 + rLavado2 + rLavado3 + rLavado4 + rLavado5;
    };

    $scope.scoreGeneral = function() {
        var rGeneral1 = parseInt($scope.formData.general1);
        var rGeneral2 = parseInt($scope.formData.general2);
        var rGeneral3 = parseInt($scope.formData.general3);
        var rGeneral4 = parseInt($scope.formData.general4);
        var rGeneral5 = parseInt($scope.formData.general5);
        var rGeneral6 = parseInt($scope.formData.general6);
        var rGeneral7 = parseInt($scope.formData.general7);
        var rGeneral8 = parseInt($scope.formData.general8);
        var rGeneral9 = parseInt($scope.formData.general9);
        var rGeneral10 = parseInt($scope.formData.general10);
        var rGeneral11 = parseInt($scope.formData.general11);
        var rGeneral12 = parseInt($scope.formData.general12);
        var rGeneral13 = parseInt($scope.formData.general13);
        var rGeneral14 = parseInt($scope.formData.general14);
        var rGeneral15 = parseInt($scope.formData.general15);
        var rGeneral16 = parseInt($scope.formData.general16);
        var rGeneral17 = parseInt($scope.formData.general17);
        var rGeneral18 = parseInt($scope.formData.general18);
        var rGeneral19 = parseInt($scope.formData.general19);
        if (!rGeneral1) { rGeneral1 = 0 };
        if (!rGeneral2) { rGeneral2 = 0 };
        if (!rGeneral3) { rGeneral3 = 0 };
        if (!rGeneral4) { rGeneral4 = 0 };
        if (!rGeneral5) { rGeneral5 = 0 };
        if (!rGeneral6) { rGeneral6 = 0 };
        if (!rGeneral7) { rGeneral7 = 0 };
        if (!rGeneral8) { rGeneral8 = 0 };
        if (!rGeneral9) { rGeneral9 = 0 };
        if (!rGeneral10) { rGeneral10 = 0 };
        if (!rGeneral11) { rGeneral11 = 0 };
        if (!rGeneral12) { rGeneral12 = 0 };
        if (!rGeneral13) { rGeneral13 = 0 };
        if (!rGeneral14) { rGeneral14 = 0 };
        if (!rGeneral15) { rGeneral15 = 0 };
        if (!rGeneral16) { rGeneral16 = 0 };
        if (!rGeneral17) { rGeneral17 = 0 };
        if (!rGeneral18) { rGeneral18 = 0 };
        if (!rGeneral19) { rGeneral19 = 0 };

        return rGeneral1 + rGeneral2 + rGeneral3 + rGeneral4 + rGeneral5 + rGeneral6 + rGeneral7 + rGeneral8 + rGeneral9 + rGeneral10 + rGeneral11 + rGeneral12 + rGeneral13 + rGeneral14 + rGeneral15 + rGeneral16 + rGeneral17 + rGeneral18 + rGeneral19;
    };

    $scope.scoreLuces = function() {
        var rLuces1 = parseInt($scope.formData.luces1);
        var rLuces2 = parseInt($scope.formData.luces2);
        if (!rLuces1) { rLuces1 = 0 };
        if (!rLuces2) { rLuces2 = 0 };

        return rLuces1 + rLuces2;
    };

    $scope.scoreTotal = function() {
        return ($scope.scoreTambor() + $scope.scorePedestalFrontal() + $scope.scorePedestalTrasero() + $scope.scoreLavado() + $scope.scoreGeneral() + $scope.scoreLuces()) * 10 / 51;
    };

    $scope.puntosTotales = function() {
        return ($scope.scoreTambor() + $scope.scorePedestalFrontal() + $scope.scorePedestalTrasero() + $scope.scoreLavado() + $scope.scoreGeneral() + $scope.scoreLuces());
    }

    $scope.irAtras = function() {
        $scope.loading = true;
        $scope.intro = true;
        $scope.ollaentrada = true;
        $scope.tambor = false;
        $scope.btnintro = false;
        $scope.seccion = "DATOS DEL CLIENTE";
        $scope.imagentrada = "img/foto-inicio.JPG";
        $scope.termometro = false;
        $scope.secciones = false;
        $scope.pedestalfrontal = false;
        $scope.pedestaltrasero = false;
        $scope.lavado = false;
        $scope.general = false;
        $scope.luces = false;
        $scope.enviando = true;
        $scope.enviado = false;
        $scope.regresar = false;
    }

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    // use the service to get all the todos
    Todos.get()
        .then(function(data) {
            $scope.todos = data;
            $scope.loading = false;
        });

    $scope.comenzarTodo = function() {
        $scope.intro = false;
        $scope.ollaentrada = false;
        $scope.tambor = true;
        $scope.seccion = "TAMBOR";
        $scope.imagentrada = "";
        $scope.termometro = true;
        $scope.secciones = true;
        $scope.pedestalfrontal = false;
        $scope.pedestaltrasero = false;
        $scope.lavado = false;
        $scope.general = false;
        $scope.luces = false;
        $scope.regresar = true;
        $scope.imagentrada = "img/foto-inicio.JPG";
    };

    $scope.comenzarPedestalFrontal = function() {
        $scope.intro = false;
        $scope.ollaentrada = false;
        $scope.tambor = false;
        $scope.seccion = "PEDESTAL FRONTAL";
        $scope.imagentrada = "img/pedestalfrontal.jpg";
        $scope.termometro = true;
        $scope.secciones = true;
        $scope.pedestalfrontal = true;
        $scope.pedestaltrasero = false;
        $scope.lavado = false;
        $scope.general = false;
        $scope.luces = false;
        $location.hash('top');
        $anchorScroll();
    }

    $scope.comenzarPedestalTrasero = function() {
        $scope.intro = false;
        $scope.ollaentrada = false;
        $scope.tambor = false;
        $scope.seccion = "PEDESTAL TRASERO";
        $scope.imagentrada = "img/pedestaltrasero.jpg";
        $scope.termometro = true;
        $scope.secciones = true;
        $scope.pedestalfrontal = false;
        $scope.pedestaltrasero = true;
        $scope.lavado = false;
        $scope.general = false;
        $scope.luces = false;
        $location.hash('top');
        $anchorScroll();
    }

    $scope.comenzarLavado = function() {
        $scope.intro = false;
        $scope.ollaentrada = false;
        $scope.tambor = false;
        $scope.seccion = "SISTEMA DE LAVADO";
        $scope.imagentrada = "img/lavado.jpg";
        $scope.termometro = true;
        $scope.secciones = true;
        $scope.pedestalfrontal = false;
        $scope.pedestaltrasero = false;
        $scope.lavado = true;
        $scope.general = false;
        $scope.luces = false;
        $location.hash('top');
        $anchorScroll();
    }

    $scope.comenzarGeneral = function() {
        $scope.intro = false;
        $scope.ollaentrada = false;
        $scope.tambor = false;
        $scope.seccion = "SISTEMA GENERAL";
        $scope.imagentrada = "img/general.jpg";
        $scope.termometro = true;
        $scope.secciones = true;
        $scope.pedestalfrontal = false;
        $scope.pedestaltrasero = false;
        $scope.lavado = false;
        $scope.general = true;
        $scope.luces = false;
        $location.hash('top');
        $anchorScroll();
    }

    $scope.comenzarLuces = function() {
        $scope.intro = false;
        $scope.ollaentrada = false;
        $scope.tambor = false;
        $scope.seccion = "SISTEMA DE LUCES";
        $scope.imagentrada = "img/luces.jpg";
        $scope.termometro = true;
        $scope.secciones = true;
        $scope.pedestalfrontal = false;
        $scope.pedestaltrasero = false;
        $scope.lavado = false;
        $scope.general = false;
        $scope.luces = true;
        $location.hash('top');
        $anchorScroll();
    };

    $scope.calcularTodo = function() {
        $scope.enviado = true;
        $scope.enviando = false;
        $scope.seccion = "RESULTADOS GENERALES";
        $scope.imagentrada = "img/olla.jpg";

        console.log("El test" + $scope.scoreTambor());


        $scope.chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "marginRight": 10,
            "dataProvider": [{
                "country": "TAMBOR",
                "visits": $scope.scoreTambor(),
                "color": "#FF0F00"
            }, {
                "country": "PEDESTAL FRONTAL",
                "visits": $scope.scorePedestalFrontal(),
                "color": "#FF6600"
            }, {
                "country": "PEDESTAL TRASERO",
                "visits": $scope.scorePedestalTrasero(),
                "color": "#FF9E01"
            }, {
                "country": "SISTEMA DE LAVADO",
                "visits": $scope.scoreLavado(),
                "color": "#FCD202"
            }, {
                "country": "SISTEMA GENERAL",
                "visits": $scope.scoreGeneral(),
                "color": "#F8FF01"
            }, {
                "country": "LUCES",
                "visits": $scope.scoreLuces(),
                "color": "#B0DE09"
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Registros por sección"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            },
            "export": {
                "enabled": true
            }
        });











    };

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
                $scope.enviado = false;
                $scope.seccion = "RESULTADOS ENVIADOS CORRECTAMENTE";
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

    $scope.html = "<h1>Hello</h1>";


}]);