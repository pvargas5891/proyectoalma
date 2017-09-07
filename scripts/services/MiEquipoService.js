'use strict';

app.service('MiEquipoService', function  (){
    this.getDatos = function (rut){

        var objeto = {
                "planvalue":"BAM XL",
                "bajadavalue":"15 Mps",
                "subidavalue":"3 Mps",
                "preciovalue":"$25.000.-",
                "caracteristicasvalue":"Aqui cualquier es texto",
                "pinvalue":"1234",
                "pukvalue":"4321"
            };


        return objeto;
    }
    return this;
});



