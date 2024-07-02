var viewModel = {
    lists: ko.observable('Listados'),
    observable: ko.observable('Observables'),
    bindings: ko.observable('Enlace de datos'),
    condicionales: ko.observable('Condicionales'),
    title:'Knockout.Js Fundamentals',
    subtitle: 'Binding: '
};
// Activación de Knockout: Se liga el ViewModel con la interfaz
ko.applyBindings(viewModel);