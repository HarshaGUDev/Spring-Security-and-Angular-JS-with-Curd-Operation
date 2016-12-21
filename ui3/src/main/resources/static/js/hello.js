angular
		.module('hello', [ 'ngRoute', 'home', 'message', 'form1'])
		.config(

				function($routeProvider, $httpProvider, $locationProvider) {

					//$locationProvider.html5Mode(true);

					$routeProvider.when('/', {
						templateUrl : 'js/home/home.html',
						controller : 'home',
						controllerAs : 'controller'
					}).when('/form1', {
						templateUrl : 'js/form1/form1.html',
						controller : 'form1',
						controllerAs : 'controller'
					}).when('/message', {
						templateUrl : 'js/message/message.html',
						controller : 'message',
						controllerAs : 'controller'
					}).otherwise('/');

					$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

				})
				;
