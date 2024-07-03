function OrderLine(){
    'use strict';
    function AppViewModel(){
        //Referencia a this
        var self=this;
        self.product = ko.observable(
            {
                name: 'Tiger-print Tuxedo', 
                price: 395.00
            }
        );
        self.quantity = ko.observable(2); 
    
        /*ko.defineProperty(self, 'subtotal', function(){
            console.log('Evaluando subtotal');
            return self.product ? self.product.price * self.quantity : 0;
        });*/
        self.subtotal = ko.computed(function(){
            console.log('Evaluando subtotal');
            return self.product() ? self.product().price * self.quantity() : 0;
        }, self);
    
        // ko.track(this);
        
        ko.applyBindings(self);
    }
    

    // Instrucción especial de Knockout para crear un nuevo objeto
    ko.applyBindings(new AppViewModel());
}
console.log('test');