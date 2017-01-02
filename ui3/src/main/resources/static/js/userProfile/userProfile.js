angular.module('userProfile', []).controller('userProfile', function( $scope,$http) {

	$scope.showdelete=false;
	$scope.editShow=false;
	$scope.submit=false;
	var self = this;
	$http.get('/resource/username/').then(function(response) {
		self.userDetails = response.data;
	});
		$scope.deleteuser=function(id)
		{	$scope.showdelete=true;
			var response = $http.delete('/resource/username/'+id);	
		response.success(function(data, status, headers, config) {	
		});
		response.error(function(data, status, headers, config) {
			$scope.error="user is not having access for deleting";
		});
	};	
	
	
	$scope.edituser=function(userDetails){
	
		{$scope.editShow=true;
		$scope.username = userDetails.username;
		$scope.password = userDetails.password;
		$scope.mobile = userDetails.mobile;
		$scope.email = userDetails.email;
		$scope.id =userDetails.id;}
	$scope.edit1user=function(){
		
		var formData = {
				username :userDetails.username,
				mobile : userDetails.mobile,
				email:userDetails.email,
				password:userDetails.password	
		};
		var response = $http.delete('/resource/people/' + userDetails.id);
		var response = $http.post('/resource/people/', formData)
			response.success(function(data, status, headers, config) {
				$scope.submit=true;
		});
		response.error(function(data, status, headers, config) {
			
			$scope.error=data;
		
		});
	
	}}
	

});

