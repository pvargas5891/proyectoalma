'use strict';
//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';

app.service('MiTraficoService', function  ($resource,REST_SERVICE_URI){
    this.getTrafico = function (numero){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/MiTraficoService/'+numero).get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
        /*var objeto = {
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


        return objeto;*/
    }
    return this;
});



