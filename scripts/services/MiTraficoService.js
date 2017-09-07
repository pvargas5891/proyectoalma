'use strict';

app.service('MiTraficoService', function  (){
    this.getTrafico = function (rut){

        var objeto = {
                "voz":"55",
                "data":"54",
                "sms":"100",
                "fechainicio": [
                        {"id":"1","fecha":"Abril"},
                        {"id":"2","fecha":"May"},
                        {"id":"3","fecha":"Jun"},
                        {"id":"4","fecha":"Jul"}                        
                    ],
                "fechatermino": [
                        {"id":"1","fecha":"Abril"},
                        {"id":"2","fecha":"May"},
                        {"id":"3","fecha":"Jun"},
                        {"id":"4","fecha":"Jul"}                        
                    ],
                    "detalle": [
                        {"id":"1","fecha":"Abril","hora":"00:54","destino":"destino1","duracion":"duracion1","tipo":"tipo1"},
                        {"id":"2","fecha":"Abril","hora":"00:54","destino":"destino1","duracion":"duracion1","tipo":"tipo1"},
                        {"id":"3","fecha":"Abril","hora":"00:54","destino":"destino1","duracion":"duracion1","tipo":"tipo1"},
                        {"id":"4","fecha":"Abril","hora":"00:54","destino":"destino1","duracion":"duracion1","tipo":"tipo1"}                                              
                    ]
            };


        return objeto;
    }
    return this;
});



