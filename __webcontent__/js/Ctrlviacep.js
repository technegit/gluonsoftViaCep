app.controller('viacepctrl',['angular.viacep'],
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

