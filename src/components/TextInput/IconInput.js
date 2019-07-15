import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 50,
    borderRadius: 5,
    margin: 10
  },
  searchIcon: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    flex: 1,
    fontSize: 15
  }
});

const IconInput = ({ change, holder, secure, icon, src }) => {
  const [secureIcon, setSecureIcon] = useState(true);
  const [secureMode, setSecureMode] = useState(secure)
  return (
    <View style={styles.searchSection}>
      <Feather style={styles.searchIcon} name={icon} size={20} color="#000" />
      <TextInput
        style={styles.input}
        placeholder={holder}
        onChangeText={change}
        underlineColorAndroid="transparent"
        secureTextEntry={secureMode}
        value={src}
      />
      <TouchableOpacity
        onPress={() => {
          setSecureIcon(!secureIcon);
          setSecureMode(!secureMode)
        }}
        activeOpacity={1}
      >
        {secure ? (
          <Feather
            style={styles.searchIcon}
            name={secureIcon ? "eye" : "eye-off"}
            size={20}
            color="#000"
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

IconInput.propTypes = {
  change: PropTypes.func.isRequired,
  holder: PropTypes.string.isRequired,
  secure: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  src: PropTypes.string
};

IconInput.defaultProps = {
  secure: false,
  src: ''
};

export default IconInput;
