package com.xi9d.expense_tracker.controller;

import com.xi9d.expense_tracker.model.Category;
import com.xi9d.expense_tracker.model.Expense;
import com.xi9d.expense_tracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/expense")
public class ExpenseController {
    // todo: crud
    private final ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }
    @PostMapping("/add")
    public ResponseEntity<Expense> addExpense(@RequestBody Expense expense){
        Expense expense1 = expenseService.addExpense(expense);
        return new ResponseEntity<>(expense1, HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Expense>> getAllExpenses(){
        List<Expense> expenses = expenseService.getAllExpenses();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }
    @GetMapping("/{expense_id}")
    public ResponseEntity<Expense> getExpenseById(@PathVariable Long expense_id){
        Optional<Expense> optionalExpense = expenseService.getExpenseById(expense_id);
        if (optionalExpense.isPresent()){
            return new ResponseEntity<>(optionalExpense.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PatchMapping("/update/{expense_id}")
    public ResponseEntity<Expense> updateExpenseById(
            @PathVariable Long expense_id,
            @RequestBody Expense expense){
        Expense expense1 = expenseService.editExpenseById(expense_id,expense);
        return new ResponseEntity<>(expense1, HttpStatus.OK);
    }
    @DeleteMapping("/{expense_id}")
    public ResponseEntity<Map<String, Boolean>> removeExpense(
            @PathVariable Long expense_id){
        boolean deleted = expenseService.deleteExpenseById(expense_id);
        String response = "Deleted Expense";
        Map<String, Boolean> results = new HashMap<>();
        results.put(response,deleted);
        return new ResponseEntity<>(results, HttpStatus.OK);
    }
}
