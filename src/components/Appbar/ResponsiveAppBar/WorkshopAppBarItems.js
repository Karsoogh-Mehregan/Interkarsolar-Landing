import React from 'react';

import DashboardButton from './components/DashboardButton';

const WorkshopAppBarItems = () => {

  const registerButton = <DashboardButton name={'ثبت‌نام '} disabled color='secondary' to={'/validation'} />;
  const loginButton = <DashboardButton name={'ورود'}  color='primary' to={'//kamva.academy/login?private_event_enter=6'} />;

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
