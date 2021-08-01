import React from 'react'

// COMPONENTS
import Home from './pages/Home/Index';

import './scss/reset.scss';
import './scss/base.scss';

const App = () => {
    return (
        <div className="mainContent">
            <Home />
        </div>
    )
}

export default App