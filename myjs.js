var myApp = angular.module('ResumeApp',[]);

myApp.controller('ResumeController', ['$scope', '$http', function($scope, $http) {
  $http.get("resume.json").success(function(resume){
    $scope.r = resume;
  }).error(function(){
    console.log("Error getting resume...")
  });
}]);
