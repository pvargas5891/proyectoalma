'use strict';

app.service('MiFacturacionService', function  (){
    this.getDatos = function (rut){

        var objeto = {                
                "facturas": [
                        {"id":"1","folio":"Mis Datos","emision":"mdi mdi-account-box","vencimiento":"misdatos","monto":"misdatos","estado":"misdatos","factura":"misdatos"},
                        {"id":"2","folio":"Mi Trafico","emision":"mdi mdi-traffic-light","vencimiento":"mitrafico","monto":"misdatos","estado":"misdatos","factura":"misdatos"},
                        {"id":"3","folio":"Facturación","emision":"mdi mdi-bank","vencimiento":"facturacion","monto":"misdatos","estado":"misdatos","factura":"misdatos"},
                        {"id":"4","folio":"Mis Servicios","emision":"mdi mdi-buffer","vencimiento":"misservicios","monto":"misdatos","estado":"misdatos","factura":"misdatos"},
                        {"id":"5","folio":"Mi Equipo","emision":"mdi mdi-cellphone-iphone","vencimiento":"miequipo","monto":"misdatos","estado":"misdatos","factura":"misdatos"},
                        {"id":"6","folio":"Cuenta Corriente","emision":"mdi mdi-account-card-details","vencimiento":"ccorriente","monto":"misdatos","estado":"misdatos","factura":"misdatos"}
                    ]
            };


        return objeto;
    }
    return this;
});



