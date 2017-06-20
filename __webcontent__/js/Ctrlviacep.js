(function($app) {

	app.controller("CtrlViaCep", CtrlViaCep);
	CtrlViaCep.$inject = ['$scope', '$http', '$q'];

	function CtrlViaCep($scope, $http, $q) {

		$scope.address = {
			zipcode : null,
			street : null,
			neighborhood : null,
			uf : null,
			city : null,
			unit : null
		}

		$scope.valor = null;
		$scope.viacep = function() {
			viaCepUrl = "https://viacep.com.br/ws/" + $scope.address.zipcode + "/json/";
			deferred = $q.defer();
			$http.get(viaCepUrl).then(function(response) {
				var raw;
				raw = response.data;
				$scope.address = raw;
				if (raw.erro) {
					$scope.address = deferred.reject('CEP não encontrado');
					return deferred.reject('CEP não encontrado');
				} else {
					return deferred.resolve(raw);
				}
			});
		}
	}

}(app));
