/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, YellowBox } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./src/navigation/AppNavigator";

// Remote Debugger icin uyari bildirimlerini kapatiyoruz
YellowBox.ignoreWarnings(["Remote debugger"]);

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./src/assets/images/gym.png"),
      require("./src/assets/images/First_Screen.png"),
      require("./src/assets/images/Second_Screen.png"),
      require("./src/assets/images/Logo_Screen.png"),
      require("./src/assets/images/Thirt_Screen.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./src/assets/fonts/SpaceMono-Regular.ttf"),
      "menlo-bold": require("./src/assets/fonts/Menlo_Bold.ttf"),
      "menlo-regular": require("./src/assets/fonts/Menlo-Regular.ttf"),
      roboto: require("./src/assets/fonts/Roboto-Bold.ttf"),
      "roboto-regular": require("./src/assets/fonts/Roboto-Regular.ttf")
    })
  ]);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}
