// persistingExpensesSpec.js

'use strict';

describe('', function() {
    beforeEach(module('app'));

    describe('call backs', function() {
        it('should call back when persisted', inject(function(expensesDataService) {
            var spyCallback = jasmine.createSpy('callback Spy');

            expensesDataService.persistExpenses(spyCallback);
            expect(spyCallback).toHaveBeenCalled();
        }));
    });
    
    describe('spy on', function () {
        it('should spy on persistExpenses method', inject(function (expensesDataService) {
            var spy = spyOn(expensesDataService, 'persistExpenses');

            expensesDataService.persistExpenses();
            expect(spy).toHaveBeenCalled();
        }));
        
        it('should spy on persistExpenses method and fake a reply', inject(function (expensesDataService) {
            var spy = spyOn(expensesDataService, 'persistExpenses').andCallFake(function() {
                return 4;
            });

            var numRecords = expensesDataService.persistExpenses();

            expect(numRecords).toEqual(4);
        }));
    });
})