// SpecHelper.js

var customMatchers = {
    toBeAReasonableExpense: function () {
        var expense = this.actual;        
        var pass = expense.isReasonable();
        var reason = pass ? 'reasonable' : 'unreasonable';

        this.message = function () {
            return 'Expected expense to be a ' + reason + ' expense';
        };

        return pass;
        
        // version 2.X style:
        //return {
        //    compare: function(actual) {
        //        var pass = actual.isReasonable();
        //        var reason = pass ? 'reasonable' : 'unreasonable';

        //        return {
        //            pass: pass,
        //            message: 'Expected expense to be a ' + reason + ' expense'
        //    };
        //    }
        //};
    }
}