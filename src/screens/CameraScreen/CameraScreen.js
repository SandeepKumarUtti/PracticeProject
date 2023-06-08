import {Button, Text} from 'native-base';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import styles from '../CameraScreen/CameraScreen.style';
import {launchImageLibrary} from 'react-native-image-picker';
const CameraScreen = props => {
  const devices = useCameraDevices();
  const device = devices.back;
  const renderCamera = () => {
    if (device == null) {
      return <Text>EMPTY</Text>;
    }
    return <Camera style={styles.camera} device={device} isActive={true} />;
  };
  const [pickerResponse, setPickerResponse] = useState(null);
  const openGallery = () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase: false,
    };
    launchImageLibrary(options, setPickerResponse);
  };
  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
  return (
    <View>
      <Button onPress={openGallery}>Open Gallery</Button>
      {uri && (
        <Image source={{uri}} style={{height: 400, width: 400, margin: 20}} />
      )}
      <Text>This is Camera Screen</Text>
      {renderCamera()}
    </View>
  );
};
export default CameraScreen;
