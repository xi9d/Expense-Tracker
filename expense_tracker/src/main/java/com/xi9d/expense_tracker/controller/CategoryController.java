package com.xi9d.expense_tracker.controller;

import com.xi9d.expense_tracker.model.Category;
import com.xi9d.expense_tracker.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    // todo: crud, create, return , update, delete
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    @PostMapping("/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category _category = categoryService.addCategory(category);
        return new ResponseEntity<>(_category, HttpStatus.OK);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories(){
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }
    @GetMapping("/name")
    public ResponseEntity<Category> getCategoryByName(@RequestPart String name){
        return new ResponseEntity<>(categoryService.getCategoryByName(name), HttpStatus.OK);
    }
    @PatchMapping("/{category_id}")
    public ResponseEntity<Category> editCategoryById(
            @PathVariable Long category_id,
            @RequestBody Category category){
        return new ResponseEntity<>(categoryService.editCategoryById(category_id, category), HttpStatus.OK);
    }
    @DeleteMapping("/{category_id}")
    public ResponseEntity<Map<String,Boolean>> removeCategoryById(@PathVariable Long category_id){
        boolean delete =categoryService.deleteById(category_id);
        String response = "deleted";
        Map<String, Boolean> results = new HashMap<>();
        results.put(response,delete);
        return new ResponseEntity<>(results, HttpStatus.OK);
    }
}
