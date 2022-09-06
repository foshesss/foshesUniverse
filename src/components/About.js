import React, { useState } from 'react';
import AboutHeader from './AboutHeader';

const About = () => {

    const [scrollPercent, setScrollPercent] = useState(0);

    const handleScroll = (event) => {
        const { body, documentElement } = event.srcElement;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = ((sd / (documentElement.scrollHeight - documentElement.clientHeight)) * 100);
        const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
        if (sp >= 0 && sp <= maxlimit) {
            console.log(scrollPercent);
            setScrollPercent(sp);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div
            className="about"
            id="about"
        >
            <AboutHeader scrollPercent={scrollPercent} />
        </div>
    );
};

export default About;
