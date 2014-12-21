// ExpenseItem.js

function ExpenseItem(expenseAmount, expenseTitle, expenseDescription) {
    var ei = this;
    
    ei.amount = 0;
    ei.title = '';
    ei.description = '';
    
    if (typeof(expenseAmount) != 'undefined') {
        ei.amount = expenseAmount;
    }
    
    if (typeof (expenseTitle) != 'undefined') {
        ei.title = expenseTitle;
    }
    
    if (typeof (expenseDescription) != 'undefined') {
        ei.description = expenseDescription;
    }
}

ExpenseItem.prototype.isReasonable = function () {
    return this.amount <= 100;
}