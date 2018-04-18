var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http, $location) {
        
    $scope.user = new user();
    $scope.hideAdd = true;

    $scope.submitLogin = function() {        
        // change page
        window.location.assign('/home.html');
        
        // var url = 'http://localhost:3001/login';
        // $http.get(url)
        // .then(function(response) {            
        //     if (response){
                
        //     }            
        // });

        var url = 'http://ec2-54-94-174-189.sa-east-1.compute.amazonaws.com:56799/api/gdws/tmethods/all/';
        
        $http.post(url)
        .then(function(response) {
            console.log(response);
            $scope.machines = response.data.iteMachines;
            $scope.jenkins = response.data.jenkinsMachine;
        });

    }

    $scope.openAddClient = function() {        
        $scope.hideAdd = false;
    }

    $scope.addClient = function() {        
        $scope.hideAdd = true;
    }

    $scope.closeAddClient = function() {        
        $scope.hideAdd = true;
    }

    $scope.clients = [
        {name:'John', age:25},
        {name:'Mary', age:40},
        {name:'Peter', age:85}
      ];

});

// User Constructor
function user() {
    this.username = '';
    this.password = '';
}
