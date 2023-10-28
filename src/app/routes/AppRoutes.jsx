import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import ElementoView from '../../views/View_test.jsx'
import SummaryView from '../../views/summary.view.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ElementoView/>} />
                <Route path="/summary" element={<SummaryView/>} />
            </Routes>
        </Router>
    );
}