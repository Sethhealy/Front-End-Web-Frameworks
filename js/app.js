angular.module("OurShopping", [])
    //calling the controller function
.controller("ShoppingController", function ($scope, ShoppingService) {



    $scope.groceries = ShoppingService.getGroceries();


    $scope.groceryInput = '';
    $scope.addGrocery =function(){

    }

        //removing the checked item(s)
     $scope.removeCheckedGrocery = function(){
        for(var i = $scope.groceries.length-1; i >=0; i--){
            if($scope.groceries[i].isChecked){
                $scope.removeGrocery(i);
            }
        }
    }

        //Removing at the pindex
    $scope.removeGrocery = function(pIndex){
    ShoppingService.removeGroceryAt(pIndex);
}



});
