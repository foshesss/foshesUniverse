import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Surface from './Surface';

const PageLayout = () => (
    <div>
        <NavBar />
        <Surface />
        <About />
    </div>
);

export default PageLayout;
