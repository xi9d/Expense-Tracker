package com.xi9d.expense_tracker.service;

import com.xi9d.expense_tracker.model.Category;
import com.xi9d.expense_tracker.model.Expense;

import java.util.List;
import java.util.Optional;

public interface ExpenseService {

    Expense addExpense(Expense expense);

    List<Expense> getAllExpenses();

    Optional<Expense> getExpenseById(Long expenseId);

    Expense editExpenseById(Long expenseId, Expense expense);

    boolean deleteExpenseById(Long expenseId);
}
