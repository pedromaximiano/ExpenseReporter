// app.js
(function() {
    "use strict";

    var app = angular.module('app', ['ngRoute']);
    
    app.config(function ($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'app/expense/expense.html',
              controller: 'ExpensesController',
              controllerAs: 'expenses'
          })
          .when('/admin', {
              templateUrl: 'app/admin/admin.html'
          })
          .otherwise({
              redirectTo: '/'
          });
    });
}());