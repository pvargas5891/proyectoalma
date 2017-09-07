'use strict';
//var REST_SERVICE_URI = 'http://127.0.0.1:8080/SmeroSecureRESTApi';
var REST_SERVICE_URI = 'http://190.82.85.187:8080/SmeroSecureRESTApi';
//var REST_SERVICE_URI = 'http://192.168.0.190:8080/SmeroSecureRESTApi';


app.service('LayouHomeService', function ($rootScope, $log, $resource, $http, store, jwtHelper) {

    //$http.defaults.headers.common.token  = store.get('jwt');

    return {
        getLayout: function () {

            var layoutResource = $resource(REST_SERVICE_URI + '/public/layout').get({});
            
            return layoutResource;

        }
    }

});
app.service('LayouHomeService2', function  ($resource){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI + '/public/LayouHomeService2').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
    }
    return this;
});
app.service('LayoutDatosService', function  (){
    this.getLayout = function (){
        var objeto = {
                "titulo1":"Datos Personales",
                "nombres":"Nombres",
                "apellidos":"Apellidos",
                "rut":"Rut",
                "celular":"N° Celular",
                "email":"Email",
                "guardar":"Guardar",
                "titulo2":"Dirección",
                "calle":"Calle",
                "numero":"Número",
                "region":"Región",
                "comuna":"Comuna",
                "editar":"Editar",
                "clave":"Clave",
                "enviarclave":"Enviar Clave por Email",
                "cambiarclave":"Cambiar Clave",
                "contratos":"Contratos",
                "fehacreacion":"Fecha Creación",
                "nombredocumento":"Nombre Documento",
                "folio":"Folio",
                "archivo":"Archivo",
                "descargar":"Descargar"
            };


        return objeto;
    }
    return this;
});
app.service('LayoutTraficoService', function  (){
    this.getLayout = function (){
        var objeto = {
            "titulo1":"Resumen Tráfico",
            "voz":"voz",
            "minutos":"minutos",
            "datos":"datos",
            "cantidad":"GB",
            "eventos":"Eventos",
            "sms":"SMS",
            "titulo2":"Descarga detalle de tráfico",
            "fechainicio":"Fecha Inicio",
            "fechafin":"Fecha Fin",
            "descargar":"Descargar",
            "explicativo1":"Puedes descargar tu detalle tráfico de los últimos 3 meses, por Rut, Centro de costo, o bien por número de celular. En las próximas horas, te enviaremos un correo a tu email registrado con el link de descarga, el que estará disponible por seguridad durante 12 horas, si necesitas más ayuda visita Yo tengo en nuestro centro de ayuda.",
            "titulo3":"Detalle del período",
            "bajarexcel":"Bajar Excel",
            "fecha":"Fecha",
            "hora":"Hora",
            "destino":"Destino",
            "duracion":"Duración",
            "tipo":"Tipo",
            "explicativo2":"Las llamadas aquí expuestas pueden incluir llamadas a números gratuitos, los cuales no se facturan. La información entregada en esta página, esta sujeta a validación al momento de la facturación. El tiempo de actualización esta con un desfase de 24 horas.",
             "descargas": [
                        {"id":"1","nombre":"Descarga por"},
                        {"id":"1","nombre":"Centro de costos"},
                        {"id":"1","nombre":"Linea"},
                        {"id":"1","nombre":"Rut"}
                    ]
            };



        return objeto;
    }
    return this;
});
app.service('LayoutFacturacionService', function  (){
    this.getLayout = function (){
        var objeto = {
            "titulo":"Mis Pagos",
            "folio":"Folio",
            "emision":"Emisión",
            "vencimiento":"Vencimiento", 
            "monto":"Monto",
            "estado":"Estado",
            "factura":" Factura",
            "verbtn":"Ver"
            };



        return objeto;
    }
    return this;
});
app.service('LayoutMisServiciosService', function  (){
    this.getLayout = function (){
        var objeto = {
            "bolsas":"Bolsas",
            "tab1":"Venta de bolsas",
            "tab2":"Bolsas Históricas",
            "tab3":"Venta Roaming",
            "tab4":"Historico Roaming",
            "complementarios":"Servicios Complementarios",
            "servicio":"Servicio",
            "fecha":"Fecha",
            "estado":"Estado",
            "accion":"Accion",
            "btnaccion":"Habilitar"
            };
	

        return objeto;
    }
    return this;
});
app.service('LayoutMiEquipoService', function  (){
    this.getLayout = function (){
        var objeto = {
            "tuplan":"Tu Plan",
            "bajada":"Velocidad de bajada de",
            "subida":"Velocidad de subida de",
            "precio":"Precio Plan",
            "modelo":"Modelo",
            "caracteristicas":"Características",
            "pinpuk":"PIN Y PUK",
            "pin":"PIN",
            "puk":"PUK"
            };
	

        return objeto;
    }
    return this;
});
app.service('LayoutCorrienteService', function  (){
    this.getLayout = function (){
        var objeto = {
            "movimiento":"Movimientos Cuenta Corriente",
            "saldo1":"El saldo de tu cuenta mensual",
            "saldo2":"El saldo de tu cuenta por equipos u otros conceptos es",
            "saldo3":"El saldo total de tu cuenta es",
            "bajarexcel":"Bajar Excel",
            "bajarpdf":"Bajar PDF",
            "tipo":"Tipo",
            "numero":"Número",
            "emision":"Fecha Emisión/Pago",
            "vencimiento":"Fecha Vencimiento",
            "monto":"Monto"
            };
	

        return objeto;
    }
    return this;
});
app.service('LayoutLoginService', function  ($resource){

    

    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI + '/public/LayoutLoginService').get({});
        console.debug("layoutResource");
        console.debug(layoutResource);
        return layoutResource;

        /*var objeto = {
            "title":"Alma Telefonía",
            "usuario":"Usuario",
            "password":"Password",
            "tituloLogin":"Sucursal OnLine",
            "recuerdame":"Recuerdame",
            "entrar":"Entrar",
            "perdistepassword":"Perdiste tu password?",
            "crearcuenta":"Crear una cuenta"
            };

        return objeto;*/
    }
    return this;
});
app.service('LayoutRegistroService', function  (){
    this.getLayout = function (){
       var objeto = {
            "title":"Alma Telefonía",
            "tituloregistro":"Registro",
            "enviar":"Registrar",
            "yatienecuenta":"Ya tienes cuenta?",
            "email":"Email",
            "username":"Usuario",
            "Password":"Password"
            };

        return objeto;
    }
    return this;
});
app.service('LayoutRecoveryService', function  (){
    this.getLayout = function (){
        var objeto = {
            "title":"Alma Telefonía",
            "titulorecupera":"Recupera Password",
            "instrucciones":"Entra tu email y te enviaremos las instrucciones!!",
            "enviar":"Enviar Email",
            "yalaencontro":"Recordaste tu password?"
            };

        return objeto;
    }
    return this;
});

app.service('LayoutPortadaService', function  (){
    this.getLayout = function (){
        var objeto = {
            "title":"Alma Telefonía",
            "titulorecupera":"Recupera Password",
            "instrucciones":"Entra tu email y te enviaremos las instrucciones!!",
            "enviar":"Enviar Email",
            "yalaencontro":"Recordaste tu password?"
            };

        return objeto;
    }
    return this;
});