angular.module('form1', [])
.controller('form1', function($scope,$http) {
	var self = this;
	$http.get('resource/').then(function(response) {
		self.greeting = response.data;
	});

	$scope.isEdit = true;
	$scope.show=true;
    $scope.enterdata = function() {
    	var formData = {
				"user" : $scope.user,
				"email":$scope.email
		};
    	if($scope.isEdit){
    		var response = $http.post('/resource/people/', formData);
    	} else {
    		var response = $http.put('/resource/people/' + $scope.id, formData);
    	}
		response.success(function(data, status, headers, config) {
			$scope.getAll();
			//$scope.isEdit = true;
			$scope.endEdit();
		});
		response.error(function(data, status, headers, config) {
			alert( "Exception details: " + JSON.stringify({data: data}));
		});
	};

	$scope.delete= function(id) {
		var response = $http.delete('/resource/people/'+id);
		response.success(function(data, status, headers, config) {
			$scope.getAll();
		});
		response.error(function(data, status, headers, config) {
			alert( "Exception details: " + JSON.stringify({data: data}));
		});
	};
	$scope.getAll= function() {

		var response = $http.get('/resource/people/');
		response.success(function(data, status, headers, config) {
			$scope.data=data._embedded.people;
		});
		response.error(function(data, status, headers, config) {
			alert( "Exception details: " + JSON.stringify({data: data}));
		});};

	$scope.startEdit= function(data) {
		$scope.isEdit = false;
		$scope.user = data.user;
		$scope.email = data.email;
		$scope.id = data.id;
	};
	$scope.endEdit= function(data) {
		$scope.isEdit = true;
		
	};

	$scope.getShow= function() {
		$scope.show=!$scope.show;
		$scope.getAll();
	}

});
