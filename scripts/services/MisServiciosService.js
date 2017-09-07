'use strict';

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



