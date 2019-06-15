import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import Colors from "../constants/Colors";
import WorkCard from "../components/Cards/WorkCard";
import IconInput from '../components/TextInput/IconInput';

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
      <IconInput change={() => {}} holder="Email Adresiniz" icon="user" />
      <IconInput change={() => {}} holder="Şifreniz" secure icon="lock" />
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
