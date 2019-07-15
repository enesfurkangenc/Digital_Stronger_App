/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text } from 'react-native';

const MonoText = (props) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export default MonoText;