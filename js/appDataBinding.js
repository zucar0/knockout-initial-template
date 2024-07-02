(function(){
    'use strict';

    function AppViewModel(){
        //Con Knockout se van a trabajar los elementos dentro de esta función
        this.nombre = ko.observable('Antonio Enríquez');
        this.comidaFavorita = ko.observable('Enchiladas');
        this.gastronomia = ko.observable('<h2>Mexicana</h2>');
    }
    // Instrucción especial de Knockout para crear un nuevo objeto
    ko.applyBindings(new AppViewModel());
}());