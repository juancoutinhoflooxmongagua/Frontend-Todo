import React from "react";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/todos" element={<Todo />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/todos" replace />} />
            </Routes>
        </HashRouter>
    );
}
