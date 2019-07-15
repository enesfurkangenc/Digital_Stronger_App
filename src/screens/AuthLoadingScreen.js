import React, { useEffect } from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

// eslint-disable-next-line react/prop-types
const AuthLoadingScreen = ({ navigation }) => {

  const getData = async () => {
    const UserInfo = await AsyncStorage.getItem("UserInfo");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(UserInfo ? "Home" : "Home");
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;