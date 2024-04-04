import React, { useState } from "react";

function AddExpense({ onAddExpense }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newName = e.target.expenseName.value;
        const newAmount = parseFloat(e.target.expenseAmount.value);
        const newCategory = e.target.category.value;
        const date = new Date();
        const newExpense = {
            name: newName,
            amount: newAmount,
            category: newCategory,
            date: date.toLocaleDateString(),
            month: date.getMonth(),
        };
        // Call the onAddExpense function with the new expense data
        onAddExpense(newExpense);
        // Clear input fields
        setName("");
        setAmount("");
        setCategory("");
    };

    return (
        <>
            <main className="container mx-auto mt-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="expenseName" className="block text-xs text-gray-700">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="expenseName"
                                name="expenseName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expenseAmount" className="block text-xs text-gray-700">
                                Amount (Ksh):
                            </label>
                            <input
                                type="number"
                                id="expenseAmount"
                                name="expenseAmount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-xs text-gray-700">
                                Category:
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Select category</option>
                                <option value="Food">Food</option>
                                <option value="Bills">Bills</option>
                                <option value="Transport">Transport</option>
                                <option value="grocery">grocery</option>
                                <option value="others">Other</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Expense
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}

export default AddExpense;
