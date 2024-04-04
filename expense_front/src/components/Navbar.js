import React from 'react';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#3F51B5', color: '#FFFFFF', padding: '1.5rem 1rem' }}> {/* Adjust padding to increase height */}
            <h1 className="text-3xl font-bold">Expense Tracker</h1> {/* Increase header size and make it bold */}
        </nav>
    );
}

export default Navbar;
