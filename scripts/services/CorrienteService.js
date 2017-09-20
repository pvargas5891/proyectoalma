'use strict';

app.service('CorrienteService', function  ($resource,REST_SERVICE_URI){
    this.getDatos = function (numero){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/CorrienteService/'+numero).get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
       /* var objeto = {
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


        return objeto;*/
    }
    return this;
});



