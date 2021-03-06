'use strict';


app.service('LayouHomeService', function ($rootScope, $log, $resource, $http, store, jwtHelper,REST_SERVICE_URI) {

    //$http.defaults.headers.common.token  = store.get('jwt');

    return {
        getLayout: function () {

            var layoutResource = $resource(REST_SERVICE_URI.service + '/public/layout').get({});
            
            return layoutResource;

        }
    }

});
app.service('LayouHomeService2', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayouHomeService2').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
    }
    return this;
});

app.service('LayoutBancosService', function  ($resource,REST_SERVICE_URI,$http){
    this.getBancos = function (successCallback, errorCallback){

        //var layoutResource = $resource().get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        //return layoutResource;

        var req = {
                method: 'GET',
                url: REST_SERVICE_URI.service + '/public/BancosService',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                }
            };
        return $http(req).then(successCallback, errorCallback);
    }
    this.getBancoTipoTarjetas = function (successCallback, errorCallback){

        //var layoutResource = $resource(REST_SERVICE_URI.service + '/public/BancoTipoTarjetasService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        //return layoutResource;
         var req = {
                method: 'GET',
                url: REST_SERVICE_URI.service + '/public/BancoTipoTarjetasService',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                }
            };
        return $http(req).then(successCallback, errorCallback);
    }
     this.seleccionPagoService = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/EcommerceSeleccionPagoService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
    }
    return this;
});
app.service('LayoutDatosService', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutDatosService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;

        
        /*var objeto = {
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
            };*/


        return objeto;
    }
    return this;
});
app.service('LayoutTraficoService', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutTraficoService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
       /* var objeto = {
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
            };*/



        return objeto;
    }
    return this;
});
app.service('LayoutFacturacionService', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutFacturacionService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;

        /*var objeto = {
            "titulo":"Mis Pagos",
            "folio":"Folio",
            "emision":"Emisión",
            "vencimiento":"Vencimiento", 
            "monto":"Monto",
            "estado":"Estado",
            "factura":" Factura",
            "verbtn":"Ver"
            };*/



        return objeto;
    }
    return this;
});
app.service('LayoutMisServiciosService', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/EcommerceBolsasYRecargasService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
       /* var objeto = {
            "bolsas":"Bolsas",
            "recargas":"Recargas",
            "menu1":"Para Hablar y navegar",
            "menu2":"Para Hablar",
            "menu3":"Bolsa de mensajes",
            "comprar":"Comprar",
            "seleccione":"Seleccione el monto a recargar",
            "bolsas1": [
                        {"id":"1","internet":"Internet","internatvalor":"200MB","minutos":"Minutos","minutosvalor":"25","vigencia":"Vigencia","vigenciavalor":"7 días","valor":"Valor","valorvalor":"15000"},
                        {"id":"2","internet":"Internet","internatvalor":"300MB","minutos":"Minutos","minutosvalor":"30","vigencia":"Vigencia","vigenciavalor":"8 días","valor":"Valor","valorvalor":"20000"},
                        {"id":"3","internet":"Internet","internatvalor":"400MB","minutos":"Minutos","minutosvalor":"35","vigencia":"Vigencia","vigenciavalor":"9 días","valor":"Valor","valorvalor":"25000"},
                        {"id":"4","internet":"Internet","internatvalor":"500MB","minutos":"Minutos","minutosvalor":"40","vigencia":"Vigencia","vigenciavalor":"10 días","valor":"Valor","valorvalor":"30000"}                       
                    ],
            "bolsas2": [
                        {"id":"1","internet":"Internet","internatvalor":"200MB","minutos":"Minutos","minutosvalor":"25","vigencia":"Vigencia","vigenciavalor":"7 días","valor":"Valor","valorvalor":"15000"},
                        {"id":"2","internet":"Internet","internatvalor":"300MB","minutos":"Minutos","minutosvalor":"30","vigencia":"Vigencia","vigenciavalor":"8 días","valor":"Valor","valorvalor":"20000"}
                                             
                    ],
            "bolsas3": [
                        {"id":"1","internet":"Internet","internatvalor":"200MB","minutos":"Minutos","minutosvalor":"25","vigencia":"Vigencia","vigenciavalor":"7 días","valor":"Valor","valorvalor":"15000"}
                                          ],                
            "montorecargas":  [
                  {"id":"1","monto":"$1.000"},
                  {"id":"2","monto":"$2.000"},
                  {"id":"3","monto":"$4.000"},
                  {"id":"4","monto":"$5.000"},
                  {"id":"5","monto":"$10.000"}
                 ]       
            };
	

        return objeto;*/
    }
    return this;
});
app.service('LayoutMiEquipoService', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutMiEquipoService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
        /*var objeto = {
            "tuplan":"Tu Plan",
            "bajada":"Velocidad de bajada de",
            "subida":"Velocidad de subida de",
            "precio":"Precio Plan",
            "modelo":"Modelo",
            "caracteristicas":"Características",
            "pinpuk":"PIN Y PUK",
            "pin":"PIN",
            "puk":"PUK"
            };*/
	

        return objeto;
    }
    return this;
});
app.service('LayoutCorrienteService', function  ($resource,REST_SERVICE_URI){
    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutCorrienteService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
        /*var objeto = {
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
            };*/
	

        return objeto;
    }
    return this;
});
app.service('LayoutLoginService', function  ($resource,REST_SERVICE_URI){

    

    this.getLayout = function (){

        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutLoginService').get({});

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
app.service('LayoutRegistroService', function  (REST_SERVICE_URI,$resource,$http){
    this.getLayout = function (){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutRegistroService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
       /*var objeto = {
            "title":"Alma Telefonía",
            "tituloregistro":"Registro",
            "enviar":"Registrar",
            "yatienecuenta":"Ya tienes cuenta?",
            "email":"Email",
            "username":"Usuario",
            "Password":"Password"
            };*/

        return objeto;
    }
    this.getLineasMaestras= function(codigo,tipo){
         var layoutResource = $resource(REST_SERVICE_URI.service + '/public/registra/'+codigo+'/'+tipo).get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
    }

    this.setRegistroCliente = function (data,successCallback,errorCallback){


        var req = {
                method: 'POST',
                url: REST_SERVICE_URI.service + '/public/registra',
                headers: {
                    'Content-Type': "application/json"
                },
                data: data
            };
        return $http(req).then(successCallback, errorCallback);

    }

    return this;
});
app.service('LayoutRecoveryService', function  (REST_SERVICE_URI,$resource){
    this.getLayout = function (){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutRecoveryService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
       /* var objeto = {
            "title":"Alma Telefonía",
            "titulorecupera":"Recupera Password",
            "instrucciones":"Entra tu email y te enviaremos las instrucciones!!",
            "enviar":"Enviar Email",
            "yalaencontro":"Recordaste tu password?"
            };*/

        return objeto;
    }
    return this;
});

app.service('LayoutPortadaService', function  (REST_SERVICE_URI){
    this.getLayout = function (){
        var layoutResource = $resource(REST_SERVICE_URI.service + '/public/LayoutService').get({});
        //console.debug("layoutResource");
        //console.debug(layoutResource);
        return layoutResource;
        /*var objeto = {
            "title":"Alma Telefonía",
            "titulorecupera":"Recupera Password",
            "instrucciones":"Entra tu email y te enviaremos las instrucciones!!",
            "enviar":"Enviar Email",
            "yalaencontro":"Recordaste tu password?"
            };*/

        return objeto;
    }
    return this;
});