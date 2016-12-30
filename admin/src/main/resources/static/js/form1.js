app.controller('form1', function($scope,$http) {
	
	console.log("hi")
	$scope.isEdit = true;
    $scope.enterdata = function() {
    	var formData = {
				"username" : $scope.username,
				"mobile" : $scope.mobile,
				"email":$scope.email,
				"password":$scope.password
				
		};
   
    	if($scope.isEdit){
    		
    		var response = $http.post('/resource/people/', formData);
    	} else {
    		var response = $http.put('/resource/people/' + $scope.id, formData);
    	}
		response.success(function(data, status, headers, config) {
			$scope.getAll();
			$scope.userData=data;
			console.log(data);
			$scope.endEdit();
			$scope.success="Your Registration Successful.. Below is your entered data";
		});
		response.error(function(data, status, headers, config) {
			//alert( "Exception details: " + JSON.stringify({data: data}));
			$scope.error=data;
			$scope.errorMessage="Username is already exist";
		});
	};

	$scope.delete= function(id) {
		var response = $http.delete('/resource/people/'+id);
		response.success(function(data, status, headers, config) {
			$scope.getAll();
		});
		response.error(function(data, status, headers, config) {
			$scope.error="user is not having access for deleting";
		});
	};
	$scope.getAll= function(){

		var response = $http.get('/resource/people/');
		response.success(function(data, status, headers, config) {
			$scope.data=data;
		});
		response.error(function(data, status, headers, config) {
			//alert( "Exception details: " + JSON.stringify({data: data}));
			$scope.error="user is not having access requesting data ";
		});};

	$scope.startEdit= function(data) {
		$scope.isEdit = false;
		$scope.username = data.username;
		$scope.mobile = data.mobile;
		$scope.email = data.email;
		$scope.id = data.id;
	};
	$scope.endEdit= function(data) {
		$scope.isEdit = true;
		
	};
	$scope.getAll();
});





