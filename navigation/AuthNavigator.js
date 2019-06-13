// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from "../screens/LoginScreen";


const AuthStack = createStackNavigator({
    SignIn: {
      screen: LoginScreen
    }
})

export default AuthStack;