'use strict';

//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';8
//var REST_SERVICE_URI = 'http://192.168.0.97:8080/SmeroSecureRESTApi';

app.service('ResumenService', function  (){
    this.getDatosResumen = function (ccosto){
        var objeto = {
                "numeroprincipal":ccosto,
                "prip":"Nombres",
                "plan":"Apellidos"
            };


        return objeto;
    }
     this.getFacturacionResumen = function (ccosto){
        var objeto = {
                "ciclo":"Datos Personales",
                "estado":"Nombres",
                "vencimiento":"Apellidos",
                "total":"Apellidos"
            };


        return objeto;
    }
    this.getMiTraficoResumen = function (ccosto){
        var objeto = {
                "periodo":"Datos Personales",
                "prip":"Nombres",
                "voz":"Apellidos",
                "sms":"Apellidos",
                "internet":"Apellidos"
            };


        return objeto;
    }
    this.getMisPagosResumen = function (ccosto){
        var objeto = {
                "periodo":"Datos Personales",
                "saldo":"Nombres",
                "saldoanterior":"Apellidos",
                "total":"Apellidos"
            };


        return objeto;
    }
    return this;
});



