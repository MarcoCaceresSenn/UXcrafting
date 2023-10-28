import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import ElementoView from '../../views/View_test.jsx'
import SummaryView from '../../views/summary.view.jsx';
import ExpenseAnalyzerView from '../../views/expense.analyzer.view.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ElementoView/>} />
                <Route path="/summary" element={<SummaryView/>} />
                <Route path="/expense-analyzer" element={<ExpenseAnalyzerView/>} />
            </Routes>
        </Router>
    );
}