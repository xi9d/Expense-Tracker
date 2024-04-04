import React from 'react';

const HistoryPage = ({ expenses }) => {
    return (
        <div>
            <h1>Expense History</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Amount (Ksh)</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>{expense.date}</td>
                        <td>{expense.name}</td>
                        <td>{expense.amount.toFixed(2)}</td>
                        <td>{expense.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryPage;
