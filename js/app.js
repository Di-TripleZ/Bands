var app = angular.module('artists',['ngRoute','ngMessages']);//en el array inyectamos dependencias

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: "views/home.html",
		controller: "HomeViewController"
	})
	.when("/filter/:decade",{
		templateUrl: "views/category.html",
		controller: "CategoryViewController"
	})
	.when ("/data/artist/:name",{
		templateUrl: "views/movie.html",
		controller: "ArtistViewController"
	})
	.when("/contact",{
		templateUrl: "views/contact.html",
		controller: "ContactViewController"
	})
	.otherwise({
		redirectTo: "views/category.html",
		controller: "CategoryViewController"
	})
}]);

app.controller ("ArtistViewController",['$scope',"$http",'$routeParams',function($scope,$http,$routeParams){
	$scope.name = $routeParams.name;
	$http.get("json/Bands.json").success (function (data){
        $scope.artists = data;

    });

}]);
app.controller ("formController",['$scope',function ($scope){
	
}]);
app.controller ("ContactViewController",['$scope',function ($scope){
	
}]);
app.controller ("HomeViewController",['$scope','home',function ($scope,home){
	home.initSlider();
}]);

app.controller ("CategoryViewController",['$scope','$http','$routeParams',function ($scope,$http,$routeParams){
	$scope.decade = $routeParams.decade;
	$http.get("json/Bands.json").success (function (data){
        $scope.artists = data;
    });
}])

app.controller('artists',['$scope','$http', function($scope,$http){
    $scope.artists = 'Movies';
    
    $http.get("json/Bands.json").success (function (data){
        $scope.artists = data;
    });
}]);


app.factory("home", function(){
	return {
		initSlider: function (){
			 $('.slider').slider({full_width: true,Interval: 200});
		}
	}
});

app.directive('yisuHeader', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/header.html'
  };
});

app.directive('yisuFooter', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/footer.html'
  };
});
