'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';

app.service('MisDatosService', function  ($resource,REST_SERVICE_URI){
    this.getDatos = function (numero){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/MisDatosService/'+numero).get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
        /*var objeto = {
                "nombresvalue":"Datos Personales",
                "apellidosvalue":"Nombres",
                "rutvalue":"Apellidos",
                "celularvalue":numero,
                "emailvalue":"N° Celular",
                "callevalue":"Calle",
                "numerovalue":"Número",
                "regionvalue":"Región",
                "comunavalue":"Comuna",
                "contratos": [
                        {"id":"1","fecha":"Mis Datos","nombre":"mdi mdi-account-box","folio":"misdatos"},
                        {"id":"2","fecha":"Mi Trafico","nombre":"mdi mdi-traffic-light","folio":"mitrafico"},
                        {"id":"3","fecha":"Facturación","nombre":"mdi mdi-bank","folio":"facturacion"},
                        {"id":"4","fecha":"Mis Servicios","nombre":"mdi mdi-buffer","folio":"misservicios"},
                        {"id":"5","fecha":"Mi Equipo","nombre":"mdi mdi-cellphone-iphone","folio":"miequipo"},
                        {"id":"6","fecha":"Cuenta Corriente","nombre":"mdi mdi-account-card-details","folio":"ccorriente"}
                    ]
            };*/


        return objeto;
    }
    return this;
});



