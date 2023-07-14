import React, {PureComponent, useEffect, useState} from 'react';
import {Button, Platform, Text, View} from 'react-native';
import TaskInputForm from '../../components/TaskInputFrom/TaskInputForm';
import styles from './Home.style';
import {v4 as uuidv4} from 'uuid';
import {addTask, getTasks} from '../../state/actions/taskActions/taskActions';
import {connect} from 'react-redux';
import TaskList from '../../components/TaskList/TaskList';
import {PERMISSIONS, request} from 'react-native-permissions';
import {strings} from '../../services/localization/localization.service';

const HomeScreen = props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('in useEffect');
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
  const checkPermission = () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(result => {
      console.log('request result', result);
      props.navigation.navigate('CameraScreen');
      //
    });
  };
  return (
    <View styles={styles.container}>
      <Text>{strings('hello')}</Text>
      <View styles={styles.form}>
        <TaskInputForm addTaskHandler={addTaskHandler} />
        <TaskList tasks={props.tasks} />
        <Button title="Check Permission" onPress={checkPermission} />
      </View>
    </View>
  );
};

// class HomeScreen extends PureComponent {
//   componentDidMount() {
//     this.props.actions.getTasks();
//   }
//   addTaskHandler = (title, text) => {
//     const _id = uuidv4();
//     this.props.actions.addTask({
//       id: _id,
//       title: title,
//       text: text,
//     });
//   };
//   checkPermission = () => {
//     request(
//       Platform.OS === 'ios'
//         ? PERMISSIONS.IOS.CAMERA
//         : PERMISSIONS.ANDROID.CAMERA,
//     ).then(result => {
//       console.log('request result', result);
//     });
//   };
//   render() {
//     return (
//       <View>
//         <Text>Hello Man</Text>
//         <View styles={styles.form}>
//           <TaskInputForm addTaskHandler={this.addTaskHandler} />
//           <TaskList tasks={this.props.tasks} />
//           <Button title="Check Permission" onPress={this.checkPermission} />
//         </View>
//       </View>
//     );
//   }
// }
const mapStateToProps = state => {
  console.log('screen', state);
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
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
