import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import ElementoView from '../../views/View_test.jsx'
import QuestionaryView from '../../views/questionary.view.jsx'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ElementoView/>} />
                <Route path="/questionary" element={<QuestionaryView/>} />
            </Routes>
        </Router>
    );
}