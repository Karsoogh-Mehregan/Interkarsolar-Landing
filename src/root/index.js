import React from 'react';
import {Route, Routes} from 'react-router-dom';

// import AboutUs from '../containers/AboutUs';
import Landing from '../containers/Landing/';
// import OurTeam from '../containers/OurTeam';
import Signup from '../containers/SignUp/Signup'
import Welcome from '../containers/SignUp/welcome'
import PaymentVerification from '../containers/SignUp/PaymentVerification';

const Root = () => {
  return (
    <div className="App">
      {/* <Route path="/about_us" component={AboutUs} /> */}
      {/* <Route path="/our_team" component={OurTeam} /> */}
      <Routes>
        <Route exact path='/' element = {<Landing />} />
        <Route path='/sign_up' element = {<Signup />} />
        <Route path='/validation' element = {<Welcome />} />
        <Route path='/paymentcallback' element = {<PaymentVerification />} />
      </Routes>
  </div>
  );
};
export default Root;
