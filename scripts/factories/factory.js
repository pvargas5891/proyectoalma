
app.factory('factoryTest', funcionInterna);

function funcionInterna(){

	this.devuelveNombre = function(){
		return 'Pablo';
	};
	this.devuelveApellido = function(){
		return 'Vargas Figueroa';
	};
	return this;
}