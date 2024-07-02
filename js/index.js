var viewModel = {
    lists: ko.observable('Listados'),
    observable: ko.observable('Observables'),
    title:'Knockout.Js Fundamentals',
    subtitle: 'Binding: '
};
// Activación de Knockout: Se liga el ViewModel con la interfaz
ko.applyBindings(viewModel);