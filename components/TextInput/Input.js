import React from "react";
import PropTypes from "prop-types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { TextInput, StyleSheet } from "react-native";

const style = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    minWidth: wp("90%"),
    minHeight: 42,
    padding: 3,
    fontSize: 14,
    fontFamily: "menlo-bold"
  }
});

const Input = ({ value = "", change, holder, _style }) => {
  return (
    <TextInput
      value={value}
      onChangeText={change}
      style={[style.input, _style]}
      clearButtonMode="always"
      placeholder={holder}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  holder: PropTypes.string.isRequired,
  _style: PropTypes.shape({})
};

Input.defaultProps = {
  _style: {}
};

export default Input;
