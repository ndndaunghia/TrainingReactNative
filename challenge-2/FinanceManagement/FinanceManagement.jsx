import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';

export default function FinanceManagement() {
  const [login, setLogin] = useState(true);
  const [profile, setProfile] = useState(false);

  const handleShowProfile = () => {
    setLogin(false);
  }

  const handleBackLogin = () => {
    setLogin(true);
  }

  const rendenScreen = () => {
    if (login) {
      return <Login handleOnPress={handleShowProfile}/>;
    } else {
      return <Profile handleBack={handleBackLogin}/>;
    }
  };

  return <>{rendenScreen()}</>;
}
