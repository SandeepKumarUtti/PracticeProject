import React from 'react';
import {View} from 'react-native';
import createStyles from './HeaderComponent.style';
import {Text} from 'native-base';
import {useThemeAwareObject} from '../../theme/ThemeAwareObject.hook';
import CustomToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import profile from '../../assets/images/profile.png';
const HeaderComponent = () => {
  const Styles = useThemeAwareObject(createStyles);
  const changeTheme = () => {};
  return (
    <View>
      <View style={Styles.component}>
        <Text style={Styles.text}>MY APP</Text>
        <CustomToggleSwitch
          value={true}
          onValueChange={changeTheme}
          imageSource={profile}
        />
      </View>
    </View>
  );
};
export default HeaderComponent;
