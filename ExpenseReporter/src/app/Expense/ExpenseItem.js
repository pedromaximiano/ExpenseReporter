// ExpenseItem.js

function ExpenseItem(expenseAmount) {
    var ei = this;
    
    ei.amount = 0;
    
    if (typeof(expenseAmount) != 'undefined') {
        ei.amount = expenseAmount;
    }
}