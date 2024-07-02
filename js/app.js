var viewModel = {
    nombre: ko.observable('Antonio Josimar'),
    bandaFavorita: ko.observable('No Te Va Gustar'),
    title:'Knockout.Js Fundamentals',
    subtitle: 'Binding: '
};
// Activación de Knockout: Se liga el ViewModel con la interfaz
ko.applyBindings(viewModel);