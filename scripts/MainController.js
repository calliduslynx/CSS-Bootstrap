var app = angular.module('The-App', []);
app.controller('MainController', function ($scope, $http, $document) {
    var vm = this;

    vm.time = "??:??:??"

    var updateTime = function(){
        vm.time =  new Date().toLocaleTimeString()
    }

    updateTime()
    setInterval(() => {
        updateTime()
        $scope.$apply()
    }, 1000)

});