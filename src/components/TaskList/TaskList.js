import React from 'react';
import {View, Text} from 'react-native';
import styles from './TaskList.style';
import {DeleteIcon} from 'native-base';
const TaskList = props => {
  console.log('props', props);
  const renderList = props.tasks.map(task => {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>{task.title}</Text>
          <Text>{task.text}</Text>
        </View>
      </View>
    );
  });
  return <View>{renderList}</View>;
};
export default TaskList;
