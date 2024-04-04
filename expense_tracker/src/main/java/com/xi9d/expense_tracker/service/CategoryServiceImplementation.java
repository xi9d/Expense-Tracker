package com.xi9d.expense_tracker.service;

import com.xi9d.expense_tracker.model.Category;
import com.xi9d.expense_tracker.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImplementation implements CategoryService{
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImplementation(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category addCategory(Category category) {
        Category _category = new Category();
        _category.setName(category.getName());
        categoryRepository.save(_category);
        return _category;
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryByName(String name) {
        Optional<Category> optionalCategory = categoryRepository.findByName(name);
        if (optionalCategory.isPresent()){
            Category category = optionalCategory.get();
            return category;
        }
        return null;
    }

    @Override
    public Category editCategoryById(Long categoryId, Category category) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        if (optionalCategory.isPresent()){
            Category _category = optionalCategory.get();
            if (category.getName() != null){
                _category.setName(category.getName());
            }
            categoryRepository.save(_category);
            return _category;

        }
        return null;
    }

    @Override
    public boolean deleteById(Long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        if (optionalCategory.isPresent()){
            Category category = optionalCategory.get();
            categoryRepository.delete(category);
            return true;
        }
        return false;
    }
}
