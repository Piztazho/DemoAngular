module.exports = function($http) {
	return{
		getData: function(url){
			return $http.get(url);
		}
	}
}