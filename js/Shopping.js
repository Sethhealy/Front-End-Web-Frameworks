angular.module("OurShopping")

.service("ShoppingService", function () {
    //defining the groceries
var groceries=[
        {label:"Food", isChecked:false},
        {label:"Other Food", isChecked:true}
    ];
    this.getGroceries=function() {
        return groceries;
    }

    this.addGrocery=function(pitem){
        //adding an item will automaticly make it unchecked
        groceries.push(  {label:pitem, isChecked:false}  );
    }
    // this makes sure you only delete one item unless multiple are selected
    this.removeGroceryAt=function(pIndex){
        groceries.splice(pIndex,1);
    };
});

