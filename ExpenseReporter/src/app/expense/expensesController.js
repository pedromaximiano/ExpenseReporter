// expensesController.js

(function () {
    'use strict';
    
    var ExpensesController = function (expensesDataService) {
        var vm = this;

        vm.activate = activate;
        vm.expenseItems = [];

        function activate() {
            return vm.expenseItems = expensesDataService.getExpenses();
        }

        activate();
    };

    // register angular module
    var app = angular.module('app');

    app.controller('ExpensesController', ['expensesDataService', ExpensesController]);
}());