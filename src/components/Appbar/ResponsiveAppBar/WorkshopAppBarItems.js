import React from 'react';

import DashboardButton from './components/DashboardButton';

const WorkshopAppBarItems = () => {

  // const registerButton = <DashboardButton name={'ثبت‌نام '} disabled color='secondary' to={'/validation'} />;
  const loginButton = <DashboardButton name={'ورود'} color='primary' to={'/login'} />;
  // const resultButton = <DashboardButton name={'مسافرین‌نهایی'} color='primary' to={'/teams'} />;


  const desktopLeftItems = [loginButton];
  const desktopRightItems = [];
  const mobileLeftItems = [loginButton];
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
