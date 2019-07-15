import React, { useState } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import Input from "../components/TextInput/Input";
import MorButton from "../components/Buttons/MorButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  NameText: {
    fontFamily: "menlo-bold",
    fontSize: 18,
    color: Colors.ButtonColorBeyaz,
    marginBottom: 5
  },
  SetBlock: {
    marginTop: hp("3%")
  },
  image: {
    width: 200,
    height: 200
  },
  headerText: {
    fontFamily: "menlo-bold",
    fontSize: 50,
    marginBottom: 50
  }
});

const UserLogin = async (name, navigation) => {
  await AsyncStorage.setItem("UserInfo", JSON.stringify(name)).then(() => {
    navigation.navigate("Home");
  });
};

// eslint-disable-next-line react/prop-types
const LoginScreen = ({ navigation }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>StrongAPP</Text>
      <Text style={styles.NameText}>İsminiz</Text>
      <Input
        value={value}
        change={e => setValue(e)}
        holder="Isminizi Giriniz.."
        _style={{ backgroundColor: "white" }}
      />
      <View style={styles.SetBlock} />
      {value === "" ? null : (
        <MorButton
          name="GIRIS YAP"
          onClick={() => UserLogin(value, navigation)}
        />
      )}
    </View>
  );
};

LoginScreen.navigationOptions = {
  header: null
};

export default LoginScreen;
