import React, { useState } from "react";
import AddExpense from "../components/AddExpense";

function Main() {
    const [expenseToggle, setExpenseToggle] = useState(false);
    const [expenses, setExpenses] = useState([]); // Define expenses state

    // Function to handle showing the add expense component
    const handleShowExpense = () => {
        setExpenseToggle(true);
    };

    // Function to handle closing the add expense component
    const handleCloseExpense = () => {
        setExpenseToggle(false);
    };

    // Function to handle adding expense from AddExpense component
    const handleAddExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    // Define filteredExpenses and totalSum
    const filteredExpenses = expenses.filter((expense) => expense.month === new Date().getMonth());
    const totalSum = filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <>
            {expenseToggle ? <AddExpense onAddExpense={handleAddExpense} /> : ""}
            {!expenseToggle ? (
                <button
                    onClick={handleShowExpense}
                    style={{
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        marginBottom: '2rem', // Increased margin bottom
                        marginTop: '1rem' // Added margin top
                    }}
                >
                    Show Add Expense
                </button>
            ) : (
                <button
                    onClick={handleCloseExpense}
                    style={{
                        backgroundColor: '#E53935',
                        color: '#FFFFFF',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        marginBottom: '2rem', // Increased margin bottom
                        marginTop: '1rem' // Added margin top
                    }}
                >
                    Close Expense
                </button>
            )}

            <div className="bg-white p-4 rounded-md shadow-md w-1/2 mx-auto"> {/* Use w-1/2 to take up half the page */}
                <table className="table w-full">
                    <thead>
                    <tr className="bg-blue-500 text-white"> {/* Change background color to blue and text color to white */}
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
        </>
    );
}

export default Main;
