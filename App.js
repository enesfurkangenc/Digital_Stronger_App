import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, YellowBox } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/AppNavigator";

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
      require('./assets/images/gym.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "menlo-bold": require("./assets/fonts/Menlo_Bold.ttf"),
      "menlo-regular": require("./assets/fonts/Menlo-Regular.ttf"),
      "roboto": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
    })
  ]);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
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
