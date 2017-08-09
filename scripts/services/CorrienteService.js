'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';8
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';

app.service('CorrienteService', function  (){
    this.getDatos = function (rut){
        
        var objeto = {
                "saldo1":"$0",
                "saldo2":"$29.992",
                "saldo3":"$29.992",
                "movimientos": [
                        {"id":"1","tipo":"Mis Datos","emision":"mdi mdi-account-box","vencimiento":"misdatos","monto":"misdatos","estado":"misdatos"},
                        {"id":"1","tipo":"Mis Datos","emision":"mdi mdi-account-box","vencimiento":"misdatos","monto":"misdatos","estado":"misdatos"},
                        {"id":"1","tipo":"Mis Datos","emision":"mdi mdi-account-box","vencimiento":"misdatos","monto":"misdatos","estado":"misdatos"},
                        {"id":"1","tipo":"Mis Datos","emision":"mdi mdi-account-box","vencimiento":"misdatos","monto":"misdatos","estado":"misdatos"}
                    ]
            };


        return objeto;
    }
    return this;
});



