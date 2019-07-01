import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

import Colors from "../constants/Colors";
import WorkCard from "../components/Cards/WorkCard";
import IconInput from '../components/TextInput/IconInput';
import Button from "../components/Buttons/MorButton";
import * as fireModules from '../modules/firebase';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = ({ Email, Password }) => {
    // firebase.auth.signInWithEmailAndPassword(Email, Password)
    fireModules.LoginModule(Email, Password)
  }

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
      <IconInput change={e => setEmail(e)} holder="Email Adresiniz" icon="user" src={email} />
      <IconInput change={e => setPassword(e)} holder="Şifreniz" secure icon="lock" src={password} />
      <Button onClick={() => Login(email, password)} name="giris yap" />
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
