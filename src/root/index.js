import React from 'react';
import {Route, Routes} from 'react-router-dom';

// import AboutUs from '../containers/AboutUs';
import Landing from '../containers/Landing/';
import PaymentVerification1 from '../containers/SignUp/PaymentVerification1';
import PaymentVerification2 from '../containers/SignUp/PaymentVerification2';
// import OurTeam from '../containers/OurTeam';
import Signup from '../containers/SignUp/Signup'
import Welcome from '../containers/SignUp/welcome'
import Teams from '../containers/Teams/Teams'
import Login from '../containers/Login/Login'
import Dashboard from '../containers/Dashboard/Dashboard';

const Root = () => {
  return (
    <div className="App">
      {/* <Route path="/about_us" component={AboutUs} /> */}
      {/* <Route path="/our_team" component={OurTeam} /> */}
      <Routes>
        <Route exact path='/' element = {<Landing />} />
        <Route path='/sign_up' element={<Signup />} />
        <Route path='/teams' element = {<Teams />} />
        <Route path='/validation' element = {<Welcome />} />
        <Route path='/payment_successful' element = {<PaymentVerification1 />} />
        <Route path='/payment_failed' element = {<PaymentVerification2 />} />
        <Route path='/login' element = {<Login />} />;
        <Route path='/panel' element = {<Dashboard/>}/>
        
      </Routes>
  </div>
  );
};
export default Root;
