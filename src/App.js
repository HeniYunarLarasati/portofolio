import React, { useEffect, useState } from 'react';
import './assets/css/base.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar';
import Home from './pages/Home';
import Album from './pages/Album';

export const ContentDesktop = () => {
  return (
    <Sidebar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/albums" component={Album} />
      </Switch>
    </Sidebar>
  );
};

export const ContentMobile = () => {
  return <h1>Mobile App</h1>;
};

const App = ({ store }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  return (
    <Provider store={store}>
      <BrowserRouter>{width <= 425 ? <ContentMobile /> : <ContentDesktop />}</BrowserRouter>
    </Provider>
  );
};

export default App;
