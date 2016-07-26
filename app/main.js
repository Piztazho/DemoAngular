require('./vendor/foundation.js');
require('./vendor/plugins/foundation.dropdown.js');
require('./vendor/plugins/foundation.dropdownMenu.js');

require('angular');

var MainController = require('./controllers/MainController');
var dataService = require('./services/data.js');
var headerControler = require('./controllers/header/header.js');

var app = angular.module('app', []);
app.factory('dataService', dataService);
app.directive('appheader', function() {
    return {
      templateUrl: './views/header/header.html', 
      controller: headerControler
    }
});

app.controller('MainController', ['$scope', MainController]);