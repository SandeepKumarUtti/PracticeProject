import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './TaskInputForm.style';
import {Button, Center, NativeBaseProvider} from 'native-base';
import Input from '../TextInput/Input';

const TaskInputForm = props => {
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);

  const getDataInForm = e => {
    props.addTaskHandler(title, text);
    setTitle(null);
    setText(null);
  };
  return (
    <View>
      <Input
        value={title}
        placeholder="Enter the Title"
        onChangeText={setTitle}
      />
      <Input value={text} placeholder="Enter the Text" onChangeText={setText} />

      <Button size="sm" onPress={getDataInForm}>
        BUTTON
      </Button>
    </View>
  );
};

export default TaskInputForm;
