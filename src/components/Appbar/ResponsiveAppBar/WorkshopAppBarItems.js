import React from 'react';

import DashboardButton from './components/DashboardButton';

const WorkshopAppBarItems = () => {

  const registerButton = <DashboardButton name={'ثبت‌نام'} disabled color='secondary' to={'/register/'} />;
  const loginButton = <DashboardButton name={'ورود'} disabled color='primary' to={'/login/'} />;

  const desktopLeftItems = [registerButton, loginButton];
  const desktopRightItems = [];
  const mobileLeftItems = [registerButton, loginButton];
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
