package com.xi9d.expense_tracker.service;

import com.xi9d.expense_tracker.model.Category;
import com.xi9d.expense_tracker.model.Expense;
import com.xi9d.expense_tracker.repository.CategoryRepository;
import com.xi9d.expense_tracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseServiceImplementation implements ExpenseService{
    private final ExpenseRepository expenseRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public ExpenseServiceImplementation(ExpenseRepository expenseRepository, CategoryRepository categoryRepository) {
        this.expenseRepository = expenseRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Expense addExpense(Expense expense) {
        Expense _expense = new Expense();
        Optional<Category> optionalCategory = categoryRepository.findByName(expense.getCategory().getName());
        if (optionalCategory.isPresent()){
            _expense.setAmount(expense.getAmount());
            _expense.setCategory(expense.getCategory());
            _expense.setName(expense.getName());
            _expense.setDescription(expense.getDescription());
            expenseRepository.save(_expense);
            return _expense;
        }else {
            categoryRepository.save(expense.getCategory());
            _expense.setAmount(expense.getAmount());
            _expense.setCategory(expense.getCategory());
            _expense.setName(expense.getName());
            _expense.setDescription(expense.getDescription());
            expenseRepository.save(_expense);
          return _expense;
        }

    }

    @Override
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @Override
    public Optional<Expense> getExpenseById(Long expenseId) {
        Optional<Expense> optionalExpense = expenseRepository.findById(expenseId);
        if (optionalExpense.isPresent()){
            Expense expense = optionalExpense.get();
            return Optional.of(expense);
        }
        return Optional.empty();
    }

    @Override
    public Expense editExpenseById(Long expenseId, Expense expense) {
        Optional<Expense> optionalExpense = expenseRepository.findById(expenseId);
        if (optionalExpense.isPresent()){
           Expense _expense = optionalExpense.get();
           if (expense.getName() != null){
               _expense.setName(expense.getName());
           }
           if (expense.getDescription() != null){
               _expense.setDescription(expense.getDescription());
           }
           if (expense.getAmount() != null){
               _expense.setAmount(expense.getAmount());
           }
           if (expense.getCategory() != null){
               _expense.setCategory(expense.getCategory());
           }
          expenseRepository.save(_expense);
           return _expense;
        }
        return null;
    }

    @Override
    public boolean deleteExpenseById(Long expenseId) {
        Optional<Expense> optionalExpense = expenseRepository.findById(expenseId);
        if (optionalExpense.isPresent()){
            Expense expense = optionalExpense.get();
            expenseRepository.delete(expense);
            return true;
        }
        return false;
    }
}
