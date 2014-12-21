// expensesDataService.js

(function () {
    'use strict';

    function expensesDataService($http) {
        function getExpenses() {
            return [
                new ExpenseItem(89.95, 'Taxi', 'to airport'),
                new ExpenseItem(15.40, 'Lunch', 'at airport'),
                new ExpenseItem(4.93, 'Coffee', 'Starbucks')
            ];
        }

        var services = {
            getExpenses: getExpenses
        };

        return services;
    }

    var app = angular.module('app');
    
    app.factory('expensesDataService', ['$http', expensesDataService]);
}());