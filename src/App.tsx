import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages';

function App() {
    return (
        <div className='relative w-full h-full'>
            <Router>
                <Pages />
            </Router>
        </div >
    );
}

export default App;
