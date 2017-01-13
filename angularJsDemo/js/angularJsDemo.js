var myApp = angular.module('myApp',[]);
myApp.controller('MainController',function($scope){
    $scope.setEmail = function(){
        $scope.email1='123@qq.com';
    }
    $scope.reSet = function(){
        $scope.email1="";
    }
});



myApp.service('firstService',function () {
    this.doResuest = function(x){
        console.log(x);
        if(x!=undefined){
            return x.toString(16);
        }else{
            return "";
        }

    };

});


myApp.controller('serviceController',['$scope','firstService',function($scope,firstService){
    $scope.events = firstService.doResuest($scope.username);
}]);

myApp.controller('playController',function($scope){
    $scope.playing = false;
   $scope.audio = document.createElement('audio');
    $scope.audio.src = "medias/anyong.mp3";
    $scope.play = function() {
        $scope.audio.play();
        $scope.playing = true;
    };
    $scope.stop = function() {
        $scope.audio.pause();
        $scope.playing = false;
    };
});

myApp.controller('MyController', function($scope) {
    var updateClock = function() {
        $scope.clock = new Date();
    };
    var timer = setInterval(function() {
        $scope.$apply(updateClock());
    }, 1000);
    updateClock();
});


myApp.controller('repeatContorller',function($scope,$rootScope){
    $scope.persons=[{
        name:'小明'
    },{
        name:'小红'
    },{
        name:$rootScope.rootScope
    }];
});

myApp.directive('ngDiyTem',function(){
    return{
        restrict: 'A',
        require: '^ngModel',
        templateUrl: 'angularJsLite.html'
    }
});

myApp.run(function($rootScope){
    $rootScope.rootScope = '全局参数';
});

