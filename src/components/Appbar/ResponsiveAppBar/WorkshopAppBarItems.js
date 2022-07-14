import React from 'react';

import DashboardButton from './components/DashboardButton';

const WorkshopAppBarItems = () => {

  const registerButton = <DashboardButton name={'ثبت‌نام '} color='secondary' to={'/validation'} />;
  const loginButton = <DashboardButton name={'ورود'} disabled color='primary' to={'//kamva.academy/login?private_event_enter=6'} />;
  const resultButton = <DashboardButton name={'مسافرین‌نهایی'} color='primary' to={'/teams'} />;


  const desktopLeftItems = [registerButton, resultButton, loginButton];
  const desktopRightItems = [];
  const mobileLeftItems = [registerButton, resultButton, loginButton];
  const mobileRightItems = [];
  const mobileMenuListItems = [];

  return {
    desktopLeftItems,
    desktopRightItems,
    mobileLeftItems,
    mobileRightItems,
    mobileMenuListItems,
  };
};

export default WorkshopAppBarItems;
