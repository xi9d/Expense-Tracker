package com.xi9d.expense_tracker.service;

import com.xi9d.expense_tracker.model.Category;

import java.util.List;

public interface CategoryService {
    Category addCategory(Category category);

    List<Category> getAllCategories();

    Category getCategoryByName(String name);

    Category editCategoryById(Long categoryId, Category category);

    boolean deleteById(Long categoryId);
}
