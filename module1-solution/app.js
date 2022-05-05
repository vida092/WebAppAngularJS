(function(){
'use strict'
angular.module("checklunch",[])
.controller("CheckIfTooMuch", CheckIfTooMuch );

CheckIfTooMuch.$inject = ['$scope'];
function CheckIfTooMuch ($scope){
    $scope.itemstr="";
    $scope.resultado="";

    $scope.check=function(){
        var str=$scope.itemstr.split(',');        
        if ($scope.itemstr==""){
            $scope.resultado="enter data first"
        }else if(str.length < 4){
            $scope.resultado="enjoy"
        }
        else{
            $scope.resultado="sorry, it is too much"
        }
    };
};

})();
