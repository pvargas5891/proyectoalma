'use strict';
app.controller('miTraficoCtrl', miTraficoCtrl);

function miTraficoCtrl($rootScope,$scope,factoryTest,LayouHomeService,Session){
	$(function() {
                $(".knob").knob({
                	"readOnly": "true"
                });
            });
}