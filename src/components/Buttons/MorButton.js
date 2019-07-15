import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "../../constants/Colors";


// eslint-disable-next-line no-unused-vars
const style = StyleSheet.create({
  Button: {
    backgroundColor: Colors.ButtonColorMor,
    padding: 10,
    width: wp('90%'),
    height: 57,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    color: Colors.ButtonTextColor,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'menlo-bold'
  }
})


const Button = ({ name, onClick }) => {
  return (
    <TouchableOpacity style={style.Button} onPress={onClick}>
      <Text style={style.Text}>{name}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
