// expensesDataServiceSpec.js

'use strict';

describe('ExpensesDataService', function() {
    beforeEach(module('app'));
    
    it('should return three expense items', inject(function(expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

    it('should return a taxi expense', inject(function(expensesDataService) {
        var expenseItems = expensesDataService.getExpenses();
        var testExpenseItem = new ExpenseItem(89.95, 'Taxi', 'to airport');

        expect(expenseItems).toContain(testExpenseItem);
    }));

    describe('Resonable Expenses', function() {
        var taxi;
        var dinner;

        beforeEach(function () {
            this.addMatchers(customMatchers);

            // jasmine version 2.X:
            // jasmine.addMatchers(customMatchers);
        });

        beforeEach(function() {
            taxi = new ExpenseItem(89.95, 'Taxi', 'to airport');
            dinner = new ExpenseItem(110, 'Dinner', 'at destination');
        });

        it('taxi should be a reasonable expense', function () {
            expect(taxi).toBeAReasonableExpense();
        });

        it('dinner should not be a reasonable expense', function() {
            expect(dinner).not.toBeAReasonableExpense();
        });
    });
})