console.log('Tutorial');
// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.title = ko.observable('Tutorial: learn.knockoutjs.com');
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    // ko.computed properti
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };

}

// Activates knockout.js
ko.applyBindings(new AppViewModel());