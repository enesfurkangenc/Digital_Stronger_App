import React, { useState } from "react";
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback,KeyboardAvoidingView } from "react-native";
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';
import MorButton from '../components/Buttons/MorButton'
import MorButtonOutline from '../components/Buttons/MorButton.outline'
import GriButton from '../components/Buttons/GriButton';
import GriButtonOutline from '../components/Buttons/GriButton.outline';
import Input from '../components/TextInput/Input';
import WorkCard from '../components/Cards/WorkCard';

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
  const [value, setValue ] = useState('');

  const ShowAlert = () => {
    alert(value)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Home Screen</Text>
      <MorButton name="GIRIS YAP" onClick={() => navigation.navigate('Links')} />
      <Text>or</Text>
      <MorButtonOutline name="GIRIS YAP" onClick={ShowAlert} />
      <Text>or</Text>
      <GriButton name="YENI ANTRENMAN OLUSTUR" onClick={() => {}} />
      <Text>or</Text>
      <GriButtonOutline name="VAZGEC" onClick={() => {}} />
      <Text>Input</Text>
      <Input
        value={value}
        change={(e) => setValue(e)}
        holder=""
      />
      <Text>Card</Text>
      <WorkCard name="BackWork" date="11 Eylul" onClick={() => {}} />
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
}

HomeScreen.defaultProps = {
  navigation: PropTypes.func
}

export default HomeScreen;
