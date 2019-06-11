import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons'
import Colors from "../../constants/Colors";


// eslint-disable-next-line no-unused-vars
const style = StyleSheet.create({
  Button: {
    backgroundColor: Colors.ButtonColorBeyaz,
    padding: 5,
    width: 40,
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    color: Colors.ButtonTurkuaz,
    textAlign: 'center',
  }
})


const Button = ({ iconname, name, onClick, Exstyle }) => {
  return (
    <TouchableOpacity style={style.Button} onPress={onClick}>
      <Text style={style.Text}>
        {name}
        <AntDesign name={iconname} size={24} style={Exstyle} color={Colors.ButtonTurkuaz} />
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  iconname: PropTypes.string,
  Exstyle: PropTypes.shape({})
};

Button.defaultProps = {
  iconname: PropTypes.string,
  Exstyle: PropTypes.shape({})
}

export default Button;
