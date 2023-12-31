import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import SummaryView from '../../views/summary.view.jsx';
import ExpenseAnalyzerView from '../../views/expense.analyzer.view.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SummaryView/>} />
                <Route path="/expense-analyzer" element={<ExpenseAnalyzerView/>} />
            </Routes>
        </Router>
    );
}