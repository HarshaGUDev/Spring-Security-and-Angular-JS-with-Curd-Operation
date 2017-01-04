angular.module('userProfile', []).controller('userProfile', function( $scope,$http) {

	$scope.showdelete=false;
	$scope.editShow=false;
	$scope.submit=false;
	$scope.isEdit1=true;
	$scope.isEdit2=true;
	$scope.showMessage=false;
	
	var self = this;
	$http.get('/resource/username/').then(function(response) {
		self.userDetails = response.data;
	});
		$scope.deleteuser=function(id)
		{	$scope.showdelete=true;
			var response = $http.delete('/resource/username/'+id);	
		response.success(function(data, status, headers, config) {	
			$scope.showMessage=true;
			
		});
		response.error(function(data, status, headers, config) {
			$scope.showMessage=false;
			$scope.error="user is not having access for deleting";
		});
	};	
	
	
	$scope.edituser=function(userDetails){
		{
		$scope.editShow=true;
		$scope.error=false;
		$scope.username = userDetails.username;
		$scope.password = userDetails.password;
		$scope.mobile = userDetails.mobile;
		$scope.email = userDetails.email;
		$scope.id =userDetails.id;}
		
		
		$scope.edit1user=function(){
			formData = {
					username :$scope.username,
					mobile : $scope.mobile,
					email:$scope.email,
					password:$scope.password	
					
			}
			if($scope.isEdit1)
			{
				var response = $http.delete('/resource/username/' + userDetails.id);
				response.success(function(data, status, headers, config) {
					var response = $http.post('/resource/username/', formData)
					response.success(function(data, status, headers, config) {
						$scope.userData=data;
						$scope.submit=true;
						$scope.isEdit1=true;
					});
					response.error(function(data, status, headers, config) {
						$scope.error=data.message;	
						$scope.isEdit1=false;
						$scope.submit=false;
						var response2 = $http.post('/resource/username/', userDetails)
						response2.success(function(data, status, headers, config) {
							$scope.userData=data;
						});
						response2.error(function(data, status, headers, config) {
							
						});
					});
				});
				response.error(function(data, status, headers, config) {
				});
			}
		
		
		};
		
	};
});


