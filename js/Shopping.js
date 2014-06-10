angular.module("OurShopping")

.service("ShoppingService",function(){

var groceries=[
        {label:"Food", isChecked:false},
        {label:"Other Food", isChecked:true}
    ];
    this.getGroceries=function(){
        return groceries;
    }

    this.addGrocery=function(pitem){

        groceries.push(  {label:pitem, isChecked:false}  );
    }
    this.removeGroceryAt=function(pIndex){
        groceries.splice(pIndex,1);
    }
});

