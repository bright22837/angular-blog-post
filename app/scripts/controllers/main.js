'use strict';

/**
 * @ngdoc function
 * @name geekAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekAngularApp
 */
angular.module('geekAngularApp')
  .controller('MainCtrl', function ($scope, $http, $filter) {
  	$scope.blog = { title :"", content:"", post_by:"", comments:[]};
    $scope.blogs = [];

    $scope.refreshBlogs = function() {
	    $http.get('http://localhost:9001/blogs')
	    	.then(function(response) {
	    		$scope.blogs = response.data;
	    	// this callback will be called asynchronously
	    	// when the response is available
	  		}, function(response) { 
	  			$scope.error = response;
	  		});
    }
	$scope.refreshBlogs();

    $scope.postBlogs = function() {
    	var blog = angular.copy($scope.blog);
    	blog.comments = [];
    	$http.post('http://localhost:9001/blogs', blog)
	    	.then(function(response) {
	    		 $scope.refreshBlogs();
	    	});
    	$scope.blog = '';
    }
  });
