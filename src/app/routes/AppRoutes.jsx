import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import SummaryView from '../../views/summary.view.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SummaryView/>} />
            </Routes>
        </Router>
    );
}