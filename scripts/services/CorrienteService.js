'use strict';

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



