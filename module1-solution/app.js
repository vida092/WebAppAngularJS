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
        if (str.length < 4){
            $scope.resultado="you are good to go"
        }else{
            $scope.resultado="sorry, it is too much"
        }
    };
};

})();