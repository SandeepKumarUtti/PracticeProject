import React, {useState} from 'react';
import {Switch, Image, View, StyleSheet} from 'react-native';

const CustomToggleSwitch = ({value, onValueChange, imageSource}) => {
  const [isEnabled, setIsEnabled] = useState(value);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onValueChange && onValueChange(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 8,
  },
});

export default CustomToggleSwitch;
