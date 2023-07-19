import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';
import RecentTrans from './Recent-Trans';

export default function FinanceManagement() {
  const [login, setLogin] = useState(true);
  const [profile, setProfile] = useState(false);
  const [recentTrans, setRecentTrans] = useState(false);

  const handleShowProfile = () => {
    setProfile(true);
    setLogin(false);
    setRecentTrans(false);
  };

  const handleBackLogin = () => {
    setProfile(false);
    setLogin(true);
    setRecentTrans(false);
  };

  const handleShowRecentTrans = () => {
    setRecentTrans(true);
    setProfile(false);
    setLogin(false);
  };

  const handleBackToProfile = () => {
    setLogin(false);
    setProfile(true);
    setRecentTrans(false);
  };

  const renderScreen = () => {
    // if (login) {
    //   return <Login handleOnPress={handleShowProfile}/>;
    // } else {
    //   return <Profile handleBack={handleBackLogin}/>;
    // }
    if (login) {
      return <Login handleOnPress={handleShowProfile} />;
    } else if (profile) {
      return (
        <Profile
          handleBackToLogin={handleBackLogin}
          handleNextToRecentTrans={handleShowRecentTrans}
          
        />
      );
    } else if (recentTrans) {
      return <RecentTrans handleBackProfile={handleBackToProfile} />;
    }
  };

  return <>{renderScreen()}</>;
}
