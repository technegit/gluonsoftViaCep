(function($app) {
	app.module('app', ['angular.viacep']).controller('viacepctrl',
			function ctrl($scope) {
				$scope.address = {
					zipcode : null,
					street : null,
					neighborhood : null,
					uf : null,
					city : null,
					unit : null
				}
			});
}(app));
