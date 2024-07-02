(function(){
    'use strict';

    function AppViewModel(){
        //Referencia a this
        var self=this;

        self.nombre = ko.observable();
        // Inicializado en false
        self.aceptasTerminosCondiciones = ko.observable(false);
    }
    // Instrucción especial de Knockout para crear un nuevo objeto
    ko.applyBindings(new AppViewModel());
}());