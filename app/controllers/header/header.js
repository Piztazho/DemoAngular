module.exports = function($scope, dataService) {
		//var data = dataService.getData('./data/pages.json');
		dataService.getData('./data/pag1es.json').success(function(data){
				$scope.navBarOptions = data;
		});
	}
}