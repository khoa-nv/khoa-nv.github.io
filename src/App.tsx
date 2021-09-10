import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
  from 'react-router-dom';
import ParticlesJS from 'Components/Particlesjs/Particles';
import Header from 'Components/Headers/Header';
import HeaderLinks from 'Components/Headers/HeaderLinks';
import Sidebar from 'Components/Sidebar/Sidebar';

const App: React.FC = (props: any): JSX.Element => {
  const { ...rest } = props;
  return (
    <React.Fragment>
      <ParticlesJS />
      <Sidebar />
      <Router>
        <Header
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Switch>
          <Route exact path="/about"
            render={(props) =>
              <About />
            }
          />
          <Route exact path="/"
            render={(props) =>
              <HomePage />
            }
          />
          {/* <Route exact path="/"> <HomePage /> </Route> */}
        </Switch>
      </Router>


    </React.Fragment>
  )
}
export default App;