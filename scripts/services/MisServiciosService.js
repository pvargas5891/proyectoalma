'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';8
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';

app.service('MisServiciosService', function  (){
    this.getDatos = function (rut){

        var objeto = {                
                "servicios": [
                        {"id":"1","servicio":"Mis Datos","fecha":"mdi mdi-account-box","estado":"misdatos"},
                        {"id":"2","servicio":"Mis Datos","fecha":"mdi mdi-account-box","estado":"misdatos"},
                        {"id":"3","servicio":"Mis Datos","fecha":"mdi mdi-account-box","estado":"misdatos"},
                        {"id":"4","servicio":"Mis Datos","fecha":"mdi mdi-account-box","estado":"misdatos"},
                        {"id":"5","servicio":"Mis Datos","fecha":"mdi mdi-account-box","estado":"misdatos"}
                    ]
            };


        return objeto;
    }
    return this;
});



