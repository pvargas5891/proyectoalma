

app.service('sessionService', sessionService);

    function sessionService() {
        var self = this;

        this.rut = null;
        this.nombres = null;
        this.apellidos = null;
        this.email = null;
        this.numeros = null;      
        this.estado=null;
        this.numeroActivo = null;
        return this;
    }