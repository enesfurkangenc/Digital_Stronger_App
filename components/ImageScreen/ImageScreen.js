/* eslint-disable react/prop-types */
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  image: {
    width: wp("100%"),
    height: hp("100%")
  },
  headtext: {
    textAlign: "center",
    marginTop: hp("60%"),
    letterSpacing: 1,
    fontFamily: "menlo-regular",
    fontSize: 20
  },
  bodytext: {
    fontSize: 13,
    fontFamily: "menlo-regular",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    color: "#C4C4C4"
  },
  Button: {
    backgroundColor: Colors.ButtonColorMor,
    width: wp("60%"),
    height: 44,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    color: Colors.ButtonTextColor,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "roboto-regular"
  },
  ButtonView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: wp('1%')
  }
});

const ImageScreen = ({
  src,
  HeadText,
  BodyText,
  navigateButton,
  isShow
}) => {
  return (
    <ImageBackground style={styles.image} source={src}>
      <Text style={styles.headtext}>{HeadText}</Text>
      <Text style={styles.bodytext}>{BodyText}</Text>
      <View style={styles.ButtonView}>
        {isShow === true ? (
          <TouchableOpacity style={styles.Button} onPress={navigateButton}>
            <Text style={styles.Text}>Bize Katıl</Text>
          </TouchableOpacity>
        ) : null }
      </View>
    </ImageBackground>
  );
};

ImageScreen.propTypes = {
  src: PropTypes.number.isRequired,
  HeadText: PropTypes.string,
  BodyText: PropTypes.string,
  navigateButton: PropTypes.func,
  isShow: PropTypes.bool
};

ImageScreen.defaultProps = {
  HeadText: "",
  BodyText: "",
  navigateButton: PropTypes.func,
  isShow: false
};

export default ImageScreen;
