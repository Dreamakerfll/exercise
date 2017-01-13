/**
 * Created by 立力 on 2017/1/9.
 */
var lvpao = angular.module('lvpao',[]);
lvpao.controller("form0_controller",function($http,$scope){
    //初始化form0
    $http({
        method:'GET',
        url:"json/form0.json"
    }).success(function(rsp){
        $scope.email = rsp.email;
        $scope.password = rsp.password;
        $scope.blood = rsp.blood;
        var areaString = "";
        $.each(rsp.area,function(index,value){
            if(rsp.area.length == index-1){
                areaString = areaString + value;
            }else{
                areaString = areaString + value + " ";
            }

        });
        $scope.area = areaString;

        $("#blood0").picker({
            toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-left"></button>\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">所属地</h1>\
    </header>',
            cols: [
                {
                    textAlign: 'center',
                    values: ['未知', 'A', 'B', 'AB','O']
                }
            ],inputReadOnly:false,
            value:rsp.blood
        });

        $("#area0").cityPicker({
            toolbarTemplate: '<header class="bar bar-nav">\
            		  <button class="button button-link pull-left"></button>\
            		  <button class="button button-link pull-right close-picker">确定</button>\
            		  <h1 class="title">常住地</h1>\
            		  </header>',
            value: rsp.area,
            inputReadOnly:false
        });
    });


    $scope.form0_submit = function(){
        console.log($scope.email);
        console.log($scope.password);
        console.log($scope.blood);
        console.log($scope.area);
    };
});

lvpao.controller("form1_controller",function($http,$scope){
    //初始化form0
    $http({
        method:'GET',
        url:"json/form1.json"
    }).success(function(rsp){
        $scope.email = rsp.email;
        $scope.password = rsp.password;
        $scope.blood = rsp.blood;
        var areaString = "";
        $.each(rsp.area,function(index,value){
            if(rsp.area.length == index-1){
                areaString = areaString + value;
            }else{
                areaString = areaString + value + " ";
            }

        });
        $scope.area = areaString;

        $("#blood1").picker({
            toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-left"></button>\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">所属地</h1>\
    </header>',
            cols: [
                {
                    textAlign: 'center',
                    values: ['未知', 'A', 'B', 'AB','O']
                }
            ],inputReadOnly:false,
            value:rsp.blood
        });

        $("#area1").cityPicker({
            toolbarTemplate: '<header class="bar bar-nav">\
            		  <button class="button button-link pull-left"></button>\
            		  <button class="button button-link pull-right close-picker">确定</button>\
            		  <h1 class="title">常住地</h1>\
            		  </header>',
            value: rsp.area,
            inputReadOnly:false
        });
    });


    $scope.form1_submit = function(){
        console.log($scope.email);
        console.log($scope.password);
        console.log($scope.blood);
        console.log($scope.area);
    };
});

lvpao.controller("form2_controller",function($http,$scope){
    //初始化form0
    $http({
        method:'GET',
        url:"json/form2.json"
    }).success(function(rsp){
        $scope.email = rsp.email;
        $scope.password = rsp.password;
        $scope.blood = rsp.blood;
        var areaString = "";
        $.each(rsp.area,function(index,value){
            if(rsp.area.length == index-1){
                areaString = areaString + value;
            }else{
                areaString = areaString + value + " ";
            }

        });
        $scope.area = areaString;

        $("#blood2").picker({
            toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-left"></button>\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">所属地</h1>\
    </header>',
            cols: [
                {
                    textAlign: 'center',
                    values: ['未知', 'A', 'B', 'AB','O']
                }
            ],inputReadOnly:false,
            value:rsp.blood
        });

        $("#area2").cityPicker({
            toolbarTemplate: '<header class="bar bar-nav">\
            		  <button class="button button-link pull-left"></button>\
            		  <button class="button button-link pull-right close-picker">确定</button>\
            		  <h1 class="title">常住地</h1>\
            		  </header>',
            value: rsp.area,
            inputReadOnly:false
        });
    });


    $scope.form2_submit = function(){
        console.log($scope.email);
        console.log($scope.password);
        console.log($scope.blood);
        console.log($scope.area);
    };
});

lvpao.run(function($rootScope){


    $('.ul_item ul li p').on('click',function(e){

        $.each($('.ul_item ul li p'),function(index,value){
            if(e.target == value){
                $(this).addClass("active");
                $('#form'+index).show();
            }else{
                $(this).removeClass("active");
                $('#form'+index).hide();
            }
        });
    });


});