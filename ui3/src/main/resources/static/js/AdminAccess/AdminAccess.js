angular.module('AdminAccess', [])

.controller('AdminAccess', function($scope,$http) {

	var self = this;
	$scope.show=false;
	$scope.showform=true;
	$scope.message;
$scope.showMessage=false;
	$http.get('resource/').then(function(response) {
		self.greeting = response.data;
	});

	$scope.isEdit = true;
    $scope.enterdata = function() {
    	$scope.showform=false;
    	$scope.xyz=true;
    	var formData = {
				"username" : $scope.username,
				"mobile" : $scope.mobile,
				"email":$scope.email,
				"password":$scope.password,
		};
   
    	if($scope.isEdit){
    		$scope.success=false,
    		$scope.errorMessage=false;
    		var response = $http.post('/resource/people/', formData)
    		response.success(function(data, status, headers, config) {
    			$scope.userData=data;
    			$scope.getAll();
    			$scope.endEdit();
    			$scope.showMessage=true;
    			$scope.success="Updating is  Successful.. Below is your entered data";
    		});
    		response.error(function(data, status, headers, config) {
    			//alert( "Exception details: " + JSON.stringify({data: data}));
    			$scope.error=data;
    			$scope.showMessage=false;
    			console.log(data);
    			$scope.errorMessage=data.error +"<br>"+data.message;
    		});
    		
    	} else {
    		var response = $http.delete('/resource/people/' + $scope.id);
    		response.success(function(data, status, headers, config) {
    			$scope.isEdit = true;
    			 $scope.enterdata();
    		});
    		response.error(function(data, status, headers, config) {
    			//alert( "Exception details: " + JSON.stringify({data: data}));
    			$scope.error=data;
    	//		$scope.errorMessage="Username is already exist";
    		});
    	}
		
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
	$scope.getAll= function() {

		var response = $http.get('/resource/people/');
		response.success(function(data, status, headers, config) {
			$scope.data=data;
		});
		response.error(function(data, status, headers, config) {
			//alert( "Exception details: " + JSON.stringify({data: data}));
			$scope.message=data.message;
			
		});};

	$scope.startEdit= function(data) {
		$scope.isEdit = false;
		$scope.show=true;
		$scope.username = data.username;
		$scope.mobile = data.mobile;
		$scope.email = data.email;
		$scope.id = data.id;
		$scope.password = data.password;
	};
	$scope.endEdit= function(data) {
		$scope.isEdit = true;
		$scope.show=false;
	};

	$scope.getShow= function() {
		$scope.show=!$scope.show;
		$scope.getAll();
	};
	 $scope.clicked = function(){
		       window.location = "/";
		       
		 }
		$scope.getAll();
});