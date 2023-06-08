import React from 'react';
import {View, Text} from 'react-native';

const TaskList = props => {
  console.log('props', props);
  const renderList = props.tasks.map(task => {
    return (
      <View>
        <Text>{task.title}</Text>
        <Text>{task.text}</Text>
      </View>
    );
  });
  return <View>{renderList}</View>;
};
export default TaskList;
