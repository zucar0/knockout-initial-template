(function(jjApp){
    'use strict';
    //Visualizamos los datos del arreglo en la consola
    console.log(jjApp);
    //Creamos un ViewModel condatos de inicio (data)
    function ViewModel(data){
        //Datos de inicio:
        this.registros=data;

    }
    // El arreglo se convierte en la data
    var viewModel = new ViewModel(jjApp.arreglo);
    console.log(viewModel);
    //Instrucción especial de Knockout en la que se pasa el viewModel
    ko.applyBindings(viewModel);
}(window.jjApp))