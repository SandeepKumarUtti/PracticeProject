import React, {useEffect, useState} from 'react';
import {Button, Platform, View} from 'react-native';
import TaskInputForm from '../../components/TaskInputFrom/TaskInputForm';
import styles from './Home.style';
import {v4 as uuidv4} from 'uuid';
import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from '../../state/actions/taskActions/taskActions';
import {connect} from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import {PERMISSIONS, request} from 'react-native-permissions';
import {strings} from '../../services/localization/localization.service';
import {Fab, Text} from 'native-base';

const HomeScreen = props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    props.actions.getTasks();
  }, [count]);
  const addTaskHandler = (title, text) => {
    const _id = uuidv4();
    props.actions.addTask({
      id: _id,
      title: title,
      text: text,
    });
    setCount(count + 1);
  };
  const deleteTaskHandler = (id, title, text) => {
    props.actions.deleteTask({
      id: id,
      title: title,
      text: text,
    });
    setCount(count - 1);
  };
  const updateTaskHandler = (id, title, text) => {
    console.log('hi', title, text, id);
    props.actions.updateTask({
      id: id,
      title: title,
      text: text,
    });
    setCount(count + 1);
  };
  const checkPermission = () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(result => {
      props.navigation.navigate('CameraScreen');
    });
  };
  return (
    <View styles={styles.container}>
      <Text>{strings('hello')}</Text>
      <View styles={styles.form}>
        <TaskInputForm addTaskHandler={addTaskHandler} />
        <TaskList
          tasks={props.tasks}
          deleteTaskHandler={deleteTaskHandler}
          updateTaskHandler={updateTaskHandler}
        />
        <Button title="Check Permission" onPress={checkPermission} />
        <Fab
          placement="bottom-right"
          width={100}
          bottom={10}
          label={
            <Text color="white" fontSize="sm">
              Message
            </Text>
          }
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.getTasks.tasks,
    addedTask: state.addTask.task,
  };
};
const mapDispatchToProps = dispatch => ({
  actions: {
    getTasks: () => {
      dispatch(getTasks());
    },
    addTask: payload => {
      dispatch(addTask(payload));
    },
    deleteTask: payload => {
      dispatch(deleteTask(payload));
    },
    updateTask: payload => {
      dispatch(updateTask(payload));
    },
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
