import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

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
  }
})

const WorkCard = ({ name, date, onClick }) => (
  <TouchableOpacity style={style.CardView} onPress={onClick}>
    <Text style={style.Name}>{name}</Text>
    <Text style={style.Date}>{date}</Text>
  </TouchableOpacity>
);

WorkCard.propTypes = { 
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default WorkCard;