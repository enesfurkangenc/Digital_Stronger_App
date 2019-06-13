import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign } from '@expo/vector-icons'
import Colors from '../../constants/Colors';

const style = StyleSheet.create({
  CardView: {
    backgroundColor: Colors.ButtonColorMor,
    minWidth: wp('90%'),
    minHeight: 52,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
  },
  Name: {
    color: Colors.ButtonColorBeyaz,
    fontFamily: 'menlo-bold',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Date: {
    color: Colors.ButtonColorBeyaz,
    fontFamily: 'roboto-regular',
    fontSize: 12,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center'
  },
  AnimateText: {
    padding: 10,
    justifyContent: 'center',
    fontFamily: 'menlo-bold',
  }
})

const WorkCard = ({ name, date, onClick, onDelete, onSetting }) => (
  <Swipeable renderRightActions={() => {
    return (
      <>
        <Animated.Text
          onPress={onDelete}
          style={style.AnimateText}
        >
          <AntDesign
            name="delete"
            size={26}
            color={Colors.DeleteColor}
          />
        </Animated.Text>
        <Animated.Text
          onPress={onSetting}
          style={style.AnimateText}
        >
          <AntDesign
            name="setting"
            size={26}
            color={Colors.ButtonColorMor}
          />
        </Animated.Text>
      </>
    )
  }}
  >
    <TouchableOpacity style={style.CardView} onPress={onClick} activeOpacity={1}>
      <Text style={style.Name}>{name}</Text>
      <Text style={style.Date}>{date}</Text>
    </TouchableOpacity>
  </Swipeable>
);

WorkCard.propTypes = { 
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSetting: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default WorkCard;