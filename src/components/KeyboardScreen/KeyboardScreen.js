import React from "react";
import {View,KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";

const DismissKeyboardHOC = (Comp) => {
  // eslint-disable-next-line react/prop-types
  return ({ children, ...props }) => (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props}>
          {children}
        </Comp>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View)

export default DismissKeyboardView;