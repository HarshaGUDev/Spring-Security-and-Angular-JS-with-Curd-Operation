angular.module('userProfile', []).controller('userProfile', function( $scope,$http) {
	var self = this;
	$http.get('/resource/username/').then(function(response) {
		self.userDetails = response.data;
	});
		$scope.deleteuser=function(id)
		{console.log(id);
			var response = $http.delete('/resource/username/'+id);
		response.success(function(data, status, headers, config) {
			$scope.success;
		});
		response.error(function(data, status, headers, config) {
			$scope.error="user is not having access for deleting";
		});};
		 
});

