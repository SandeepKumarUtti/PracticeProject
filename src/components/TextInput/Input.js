import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({value, placeholder, onChangeText}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={e => onChangeText(e)}
      />
    </View>
  );
};
export default Input;
