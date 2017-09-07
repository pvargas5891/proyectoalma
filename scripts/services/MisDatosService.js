'use strict';


app.service('MisDatosService', function  (){
    this.getDatos = function (numero){

        var objeto = {
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
            };


        return objeto;
    }
    return this;
});



