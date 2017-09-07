'use strict';

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



