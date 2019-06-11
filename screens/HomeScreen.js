import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Home Screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Setting")}
        title="Setting Screen"
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  Text: {
    textAlign: "center",
    marginTop: 100
  }
});

export default HomeScreen;
