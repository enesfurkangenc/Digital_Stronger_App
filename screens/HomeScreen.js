import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import Colors from "../constants/Colors";
import MorButton from "../components/Buttons/MorButton";
import MorButtonOutline from "../components/Buttons/MorButton.outline";
import GriButton from "../components/Buttons/GriButton";
import GriButtonOutline from "../components/Buttons/GriButton.outline";
import Input from "../components/TextInput/Input";
import WorkCard from "../components/Cards/WorkCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackColor,
    alignItems: "center"
  },
  Text: {
    textAlign: "center",
    marginTop: 100,
    marginBottom: 30
  }
});

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = useState("");

  const ShowAlert = () => {
    alert(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Home Screen</Text>
      <WorkCard
        name="BackWork"
        date="11 Eylul"
        onClick={() => navigation.navigate("Links")}
        onSetting={() => alert("setting")}
        onDelete={() => alert("delete")}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
};

HomeScreen.defaultProps = {
  navigation: PropTypes.func
};

export default HomeScreen;
