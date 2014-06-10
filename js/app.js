angular.module("OurShopping",[])

.controller("ShoppingController",function($scope,ShoppingService){



    $scope.groceries= ShoppingService.getGroceries();


    $scope.groceryInput = '';
    $scope.errorMsg = '';

    $scope.addGrocery=function(){



        if($scope.groceryInput.length == 0){


            $scope.errorMsg = "You have to fill all fields por favor";
            return;

            console.log("bluh");
        } else {

            ShoppingService.addGrocery($scope.groceryInput);
            $scope.groceryInput = '';
        }

    }


     $scope.removeCheckedGrocery = function(){
        for(var i = $scope.groceries.length-1; i >=0; i--){
            if($scope.groceries[i].isChecked){
                $scope.removeGrocery(i);
            }
        }
    }


$scope.removeGrocery = function(pIndex){
    ShoppingService.removeGroceryAt(pIndex);
}



});
