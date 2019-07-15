// eslint-disable-next-line no-unused-vars
import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Links: {
      screen: LinksScreen
    },
    Setting: {
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {},
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStack;
