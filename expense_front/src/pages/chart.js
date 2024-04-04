import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Chart() {
    const [expenses, setExpenses] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Track selected month (0-11)
    const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.expenseName.value;
        const amount = parseFloat(e.target.expenseAmount.value);
        const category = e.target.category.value; // Get selected category
        const date = new Date();
        const newExpense = {
            name,
            amount,
            category,
            date: date.toLocaleDateString(),
            month: date.getMonth(),
        };
        setExpenses([...expenses, newExpense]);
        e.target.reset();
    };

    const filteredExpenses = expenses.filter(
        (expense) => expense.month === selectedMonth
    );
    const totalSum = filteredExpenses.reduce(
        (acc, expense) => acc + expense.amount,
        0
    );

    const handleMonthChange = (e) => {
        setSelectedMonth(parseInt(e.target.value));
    };

    const handleClearExpenses = () => {
        setExpenses([]);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <>
            <Navbar />
            <main className="max-w-md mx-auto container mx-auto mt-4">
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
                                className="mt-1 p-2 border border-gray-300 rounded w-full focus:ring-indigo-500 focus:border-indigo-500"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="">Select category</option>
                                <option value="Food">Food</option>
                                <option value="Bills">Bills</option>
                                <option value="Transport">Transport</option>
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
                    <div className="mt-4">
                        <button
                            onClick={handleClearExpenses}
                            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Clear Expenses
                        </button>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-md shadow-md mt-4">
                    <table className="table">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-center">Date</th>
                            <th className="px-4 py-2 text-center">Item</th>
                            <th className="px-4 py-2 text-center">Amount (Ksh)</th>
                            <th className="px-4 py-2 text-center">Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredExpenses.map((expense, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="px-4 py-2 text-center">{expense.date}</td>
                                <td className="px-4 py-2 text-center">{expense.name}</td>
                                <td className="px-4 py-2 text-center">{expense.amount.toFixed(2)}</td>
                                <td className="px-4 py-2 text-center">{expense.category}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot className="bg-gray-200">
                        <tr>
                            <td colSpan="2" className="py-2 px-4 text-right font-semibold">Total (Ksh):</td>
                            <td colSpan="2" className="py-2 px-4 font-semibold text-center">{totalSum.toFixed(2)}</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Chart;
