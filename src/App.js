import { useEffect, useState } from 'react';
import PageLayout from './components/PageLayout';
import './main.scss';

const App = () => {

  // if you're reading this, mobile is a pain in the ass:
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        height: window.innerHeight,
      });
    };

    // set up event
    window.addEventListener('resize', updateWindowSize);

    // callback for removing event
    return () => {
      window.removeEventListener('resize', updateWindowSize)
    };
  }, []);

  return (
    <PageLayout
      style={windowSize}
    />
  );
};

export default App;
